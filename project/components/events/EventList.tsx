import React from "react";
import { IDummyEvent } from "../../types";
import EventItem from "./EventItem";
import styles from "./EventList.module.css";

interface IEventLIst {
  list: IDummyEvent[];
}

const EventList = ({ list }: IEventLIst) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EventList;
