import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { BackendAndClientSection } from "./sections/BackendAndClientSection/BackendAndClientSection";
import { Header } from "./sections/Header/Header";
import { PipelineSection } from "./sections/FastSection/FastSection";
import { TypeSafetySection } from "./sections/TypeSafetySection/TypeSafetySection";

export default function Home(): JSX.Element {
  return (
    <Layout description="Kinekt is a Web Framework written in TypeScript.">
      <Header></Header>

      <main className="home-main">
        <BackendAndClientSection></BackendAndClientSection>

        <PipelineSection></PipelineSection>

        <TypeSafetySection></TypeSafetySection>
      </main>
    </Layout>
  );
}
