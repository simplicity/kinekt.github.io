---
sidebar_position: 1
---

# Getting Started

:::warning

Kinekt is under active development. APIs will change, and you probably shouldn't use it in production just yet.

:::

## Installation

```bash npm2yarn
npm install kinekt
```

## Define a pipeline

```TypeScript title="./pipeline.ts"
import { AuthenticateCallbackResult, BasePipelineContext, checkAcceptHeader, createPipeline, createValidatedEndpointFactory, deserialize, finalize, handleValidationErrors, logger, serialize, ValidationErrors, withValidation, } from "kinekt";

const defaultValidationErrorHandler = (validationErrors: ValidationErrors) => ({
  statusCode: 400 as const,
  body: validationErrors,
});

export const pipeline = createValidatedEndpointFactory(
  createPipeline(
    checkAcceptHeader(),
    deserialize(),
    withValidation()
  ).split( // <-- This is where the request handler callback will be placed
    handleValidationErrors(defaultValidationErrorHandler),
    serialize(),
    finalize(),
    logger()
  )
);
```

## Define an endpoint

```TypeScript title="./getUser.ts"
import { z } from "zod";
import { pipeline } from "../../pipeline";

type User = { email: string };

export const getUser = pipeline.createEndpoint(
  "GET /users/:id",

  {
    params: z.object({ id: z.coerce.number() }),
    response: {
      200: z.custom<User>(),
      404: z.custom<{ message: string }>(),
    },
  },

  async ({ params }) => {
    const user: User = { email: "some@email.com" } // Insert custom db fetching logic here

    if (user === undefined) {
      return {
        statusCode: 404,
        body: { message: "User not found" },
      };
    }

    return {
      statusCode: 200,
      body: user,
    };
  }
);
```

## Create an entry point

```TypeScript title="./api.ts"
import {
  consoleLogger,
  createPipeline,
  createServer,
  logger,
  notFound,
} from "kinekt";
import { getUser } from "./endpoints/users/getUser";

// If you don't host a notFound endpoint, the server will return a 500 error
// instead of a 404 if an unknown path is requested
const notFoundEndpoint = { pipeline: createPipeline(notFound(), logger()) };

const serve = createServer({
  logger: consoleLogger,
  port: parseInt(process.env.PORT ?? "3000"),
  hostname: "0.0.0.0",
});

// Add additional endpoints here
serve(notFoundEndpoint, getUser);

```

## Start server

```bash
ts-node api.ts
```

## Call endpoint with curl

```bash
curl http://localhost:3000/users/123
```

## Use the client

```TypeScript title="./client.ts"
import {pipeline} from "./pipeline"

pipeline.setGlobalClientParams({
  baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
});

getUser({ params: { id: 123 } })
  .ok(200) // With this, you tell the client that you assume to receive a 200
           // status code. Since the `getUser` endpoint might also return 404,
           // you could use `.ok(400)` as well. An error will be thrown if the
           // returned status code doesn't meet the expectation.
           //
           // Alternatively, you can use `.all()` to handle all potential
           // results, including unexpected errors such as network errors.
  .then(console.log);
```

## Add CORS handling

```TypeScript title="./pipeline.ts"
createPipeline(
  cors({origins: "*"}), // Add cors middleware. You should add this to the top
                        // of the pipeline.
  ...
)
```

## Add authentication

```TypeScript title="./pipeline.ts"
export type TestSession = { user: { email: string } };

async function getSession<In extends BasePipelineContext>(
  context: In
): Promise<AuthenticateCallbackResult<TestSession>> {
  // Implement custom authentication logic here.
  const authorization = context.request.getHeader("authorization");

  return authorization === null
    ? { type: "unset" }
    : { type: "set", session: { user: { email: atob(authorization) } } };
}

createPipeline(
  cors({origins: "*"}),
  authenticate(getSession), // Add authenticate middleware. You should add this
                            // after the cors middleware.
                            //
                            // After adding this middleware, you will have
                            // access to `context.session` inside your request
                            // handlers.
  ...
)
```
