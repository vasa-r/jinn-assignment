import { ReactNode } from "react";
import styles from "./Card.module.css";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className={styles.root}>{children}</div>;
};

export default Card;
