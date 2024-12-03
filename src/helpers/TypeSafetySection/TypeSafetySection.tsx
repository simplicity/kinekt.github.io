import CodeBlock from "@theme/CodeBlock";
import { CodeBlockWrapper } from "../../helpers/CodeBlockWrapper/CodeBlockWrapper";
import styles from "./styles.module.css";

export function TypeSafetySection() {
  return (
    <div className={styles.outer}>
      <h1>Type Safety</h1>

      <p>
        Kinekt takes full advantage of the TypeScript Compiler to write 100%
        type safe code.
      </p>

      <CodeBlockWrapper>
        <CodeBlock language="TypeScript" showLineNumbers>
          {code1}
        </CodeBlock>
      </CodeBlockWrapper>

      <CodeBlockWrapper>
        <CodeBlock language="TypeScript" showLineNumbers>
          {code2}
        </CodeBlock>
      </CodeBlockWrapper>
    </div>
  );
}

const code1 = `
const pipeline = createPipeline(
  ...,
  authenticate(), //                     <-- adding authenticate middleware
  ...
);

export const getUser = app.createEndpoint(
  // ...

  async ({ context }) => {
    const currentUser = context.user; // <-- the compiler gives an error if the
                                      //     authenticate middleware is not
                                      //     present in the pipeline.

    // ...
  }
);
`;

const code2 = `
export const createUser = testPipeline.createEndpoint(
  "POST /organization/:organizationId/users",
  //                        ^---- by using a param segment, you are forced to
  //                              use a 'params' schema containing
  //                              'organizationId' (see below).

  // ^---- by using POST method here, you are forced to declare a body schema
  //       (see below).

  {
    params: z.object({ organizationId: z.string() }), //    <- params schema
    query: z.object({ private: zodBooleanFromString() }),
    body: z.object({ email: z.string() }), //               <- body schema

    response: {
      // You must explicitly declare which bodies are returned for which status
      // codes.
      200: z.custom<User>(),
      409: z.custom<{ message: string }>(),
    },
  },

  async ({ params, query, body, context }) => {
    // You must return bodies and status codes as declared in the response
    // schemas.
    if (body.email === "existing@email.com") {
      return {
        statusCode: 409,
        body: { message: "User with this email already exists" },
      };
    }

    return {
      statusCode: 200,
      body: {
        id: "some-id",
        email: body.email,
        organizationId: params.organizationId,
        private: query.private,
      },
    };
  }
);
`;
