import { ReactNode } from "react";
import styles from "./EventContent.module.css";

interface IEventContentProps {
  children: ReactNode;
}
function EventContent(props: IEventContentProps) {
  return <section className={styles.content}>{props.children}</section>;
}

export default EventContent;
