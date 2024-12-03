import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  children: any; // TODO how to type this?
  className?: string;
};

export function CodeBlockWrapper(props: Props) {
  return (
    <div className={clsx(styles.outer, props.className)}>
      <div className={styles.line}></div>
      {props.children}
    </div>
  );
}
