import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { BackendAndClientSection } from "./BackendAndClientSection/BackendAndClientSection";
import { PipelineSection } from "./PipelineSection/PipelineSection";
import { RouterSection } from "./RouterSection/RouterSection";
import styles from "./styles.module.css";
import { TypeSafetySection } from "./TypeSafetySection/TypeSafetySection";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      noFooter={true}
    >
      <header className={styles.header}>
        <h1>Build REST APIs With High Precision.</h1>
        <h2>Kinekt is a Zero-Dependency TypeScript Web Framework.</h2>
        <img src="img/herobg.png"></img>
      </header>

      <main>
        <BackendAndClientSection></BackendAndClientSection>

        <PipelineSection></PipelineSection>

        <RouterSection></RouterSection>

        <TypeSafetySection></TypeSafetySection>
      </main>
    </Layout>
  );
}
