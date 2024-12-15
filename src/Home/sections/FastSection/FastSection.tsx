import styles from "./styles.module.css";

export function PipelineSection() {
  return (
    <div className={styles.outer}>
      <img
        className={styles.pipelineIllustration}
        src="img/pipeline-illustration.svg"
      ></img>

      <img
        className={styles.routerIllustration}
        src="img/router-illustration.svg"
      ></img>

      <img className={styles.blueBlob} src="img/blue-blob-1.png"></img>

      <h1>Fast</h1>

      <div className={styles.row}>
        <div className={styles.paragraphs}>
          <p>
            Kinekt is built from the ground up with performance in mind. It
            features a carefully crafted middleware engine which easily competes
            with other node-based web-frameworks, and uses a radix-tree for
            routing.
          </p>
        </div>
      </div>
    </div>
  );
}
