import Link from "@docusaurus/Link";
import clsx from "clsx";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Build REST APIs With High Precision.</h1>
      <h2>Kinekt is a Zero-Dependency TypeScript Web Framework.</h2>

      <Link
        className={clsx("button", "button--primary", styles.button)}
        to="/docs/intro"
      >
        Get Started
      </Link>

      <img src="img/herobg.png"></img>
    </header>
  );
}
