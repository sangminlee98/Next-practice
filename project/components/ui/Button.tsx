import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./button.module.css";
interface IButtonProps {
  link: string;
  children: ReactNode;
}
const Button = (props: IButtonProps) => {
  return (
    <Link href={props.link}>
      <a className={styles.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
