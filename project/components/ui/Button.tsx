import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./button.module.css";
interface IButtonProps {
  link?: string;
  children: ReactNode;
  onClick?: () => void;
}
const Button = (props: IButtonProps) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
