import { ReactNode } from "react";
import classes from "./LogisticsItem.module.css";

interface ILogisticsItemProps {
  icon: () => JSX.Element;
  children: ReactNode;
}
function LogisticsItem(props: ILogisticsItemProps) {
  const { icon: Icon } = props;
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
