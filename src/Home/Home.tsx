import Layout from "@theme/Layout";
import { BackendAndClientSection } from "./sections/BackendAndClientSection/BackendAndClientSection";
import { PipelineSection } from "./sections/FastSection/FastSection";
import { Header } from "./sections/Header/Header";
import { TypeSafetySection } from "./sections/TypeSafetySection/TypeSafetySection";

export default function Home(): JSX.Element {
  return (
    <Layout description="A TypeScript-first web framework for building the next generation of web apps.">
      <Header></Header>

      <main className="home-main">
        <BackendAndClientSection></BackendAndClientSection>

        <PipelineSection></PipelineSection>

        <TypeSafetySection></TypeSafetySection>
      </main>
    </Layout>
  );
}
