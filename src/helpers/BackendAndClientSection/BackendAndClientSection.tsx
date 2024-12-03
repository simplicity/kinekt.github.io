import CodeBlock from "@theme/CodeBlock";
import { CodeBlockWrapper } from "../../helpers/CodeBlockWrapper/CodeBlockWrapper";
import styles from "./styles.module.css";

export function BackendAndClientSection() {
  return (
    <div className={styles.outer}>
      <img className={styles.purpleBlob} src="img/purple-blob-1.png"></img>

      <div className={styles.texts}>
        <h1>Write Backend Code And Get The Client For Free.</h1>

        <p>
          Kinekt automatically derives the client with which you call your
          endpoint.
        </p>
      </div>

      <CodeBlockWrapper>
        <CodeBlock language="TypeScript" showLineNumbers>
          {code}
        </CodeBlock>
      </CodeBlockWrapper>
    </div>
  );
}

const code = `
export const getUser = app.createEndpoint(
  "GET /users/:id",

  {
    params: z.object({ id: z.string() }),
    response: { 200: z.custom<User>() },
  },

  async ({ params }) => {
    const user = await db.users.findOne(params.id);

    return {
      statusCode: 200,
      body: user,
    };
  }
);

const user = await getUser({ params: { id: "some-id" } });
`;
