import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { BackendAndClientSection } from "./sections/BackendAndClientSection/BackendAndClientSection";
import { Header } from "./sections/Header/Header";
import { PipelineSection } from "./sections/PipelineSection/PipelineSection";
import { RouterSection } from "./sections/RouterSection/RouterSection";
import { TypeSafetySection } from "./sections/TypeSafetySection/TypeSafetySection";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <Header></Header>

      <main>
        <BackendAndClientSection></BackendAndClientSection>

        <PipelineSection></PipelineSection>

        <RouterSection></RouterSection>

        <TypeSafetySection></TypeSafetySection>
      </main>
    </Layout>
  );
}
