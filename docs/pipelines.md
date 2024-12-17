---
sidebar_position: 2
---

# Pipelines

At the core of kinekt lies a middleware engine which powers the processing of incoming requests. When a request enters the server, it will be transformed into a context object and then passed through a chain of middlewares. This chain of middlewares is called a pipeline. Every endpoint you create is an individual pipeline.

Creating a pipeline manually could look something like this:

```TypeScript
const pipeline = createPipeline(
  authenticate(params.getSession),
  cors(params.cors),
  deserialize(),
  handleRequest(),
  serialize(),
  finalize(),
  logger({ logger: params.logger })
);
```

You would call it like this:

```TypeScript
const result = await pipeline(context);
```

The middlewares are executed in the exact order they are defined. Some middlewares depenend on each other. For example, the `serialize` middleware must be present in order for the `finalize` middleware to work.

## Endpoint factories

In the example above, there's a `handleRequest` middleware. This middleware doesn't actually exist in kinekt and is there for illustrative purposes only. This is a middleware you could write yourself in order to reply to a request, for example by setting a body, status code and headers.

It would be daunting to re-write the above code everytime you want to create a new endpoint. This is where endpoint factories come in to the picture.

Kinekt currently provides one endpoint factory: `createSchematizedEndpointFactory`. It allows you to define a pipeline blueprint which can then be cloned for every endpoint you create:

```TypeScript
const app = createSchematizedEndpointFactory(
  createPipeline(
    authenticate(getSession),
    cors(corsOptions),
    deserialize()
  ).split(
    handleValidationErrors(defaultValidationErrorHandler),
    serialize(),
    finalize(),
    logger({ logger: params.logger })
  )
)

const createUser = app.createEndpoint(
  "POST /users",

  {
    body: z.object({ email: z.string() }),
    response: { 201: z.custom<User>(), },
  },

  async ({ params, query, body }) => {
    ...
  }
)
```

Note the use of the `.split()` call: it means that we're splitting up the pipeline into two parts, which allows `createSchematizedEndpointFactory` to place a custom middleware (called `schematizedEndpoint`) inbetween. This is the middleware which powers the definition of 100% typesafe endpoints by using zod schemas.

With `app.createEndpoint()`, we can now create as many endpoints as we want. Note that, while each endpoint is a stand-alone pipeline, the middleware instances are reused, which means that memory consumption remains low.

## Modularity & Opinionatedness

It is important to highlight the aspect of modularity which comes with the pipeline architecture. By using this concept, we're completely free in defining different kinds of endpoints. When building a REST api, we're most likely going to use the schematized endpoints. But we might have special scenarios where we need a request to be routed to a custom processing pipeline. In this case, we can simply create a custom pipeline and perhaps a custom endpoint factory function in order to write more custom processing code.

It is also important to note that kinekt has an unopinionated core: the concept of middlewares and pipelines is very common, easy to understand and simple to implement. Opinionatedness in kinekt arises through custom layers such as the `createSchematizedEndpointFactory`. You are not forced to use that, however. In fact, `createSchematizedEndpointFactory` could be moved to a separate package, and the framework itself would still be perfectly useable.
