import CodeBlock from "@theme/CodeBlock";
import { CodeBlockWrapper } from "../../helpers/CodeBlockWrapper/CodeBlockWrapper";
import styles from "./styles.module.css";

export function PipelineSection() {
  return (
    <div className={styles.outer}>
      <img
        className={styles.illustration}
        src="img/pipeline-illustration.svg"
      ></img>

      <img className={styles.blueBlob} src="img/blue-blob-1.png"></img>

      <h1>Middlewares and Pipelines</h1>

      <div className={styles.row}>
        <div className={styles.paragraphs}>
          <p>
            Kinekt uses middlewares which are combined into pipelines to handle
            requests.
          </p>

          <p>
            An incoming request will be transformed into a context object and
            passed through a given pipeline.
          </p>

          <p>Every endpoint is a stand-alone pipeline.</p>
        </div>

        <CodeBlockWrapper>
          <CodeBlock language="TypeScript" showLineNumbers>
            {code}
          </CodeBlock>
        </CodeBlockWrapper>
      </div>
    </div>
  );
}

const code = `
const pipeline = createPipeline(
  cors(),
  authenticate(),
  checkAcceptHeader(),
  deserialize(),
  basicEndpoint(params),
  serialize(),
  finalize()
)

const result = await pipeline(context)
`;
