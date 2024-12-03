import styles from "./styles.module.css";

export function RouterSection() {
  return (
    <div className={styles.outer}>
      <img className={styles.blueBlob} src="img/blue-blob-2.png"></img>

      <div className={styles.texts}>
        <h1>Efficient Routing</h1>

        <p>
          Kinekt uses a route tree, compiled at startup, to efficiently dispatch
          incoming requests to the correct pipelines.
        </p>
      </div>

      <img
        className={styles.illustration}
        src="img/router-illustration.svg"
      ></img>
    </div>
  );
}
