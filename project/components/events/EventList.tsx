import React from "react";
import { Event } from "../../types";
import EventItem from "./EventItem";
import styles from "./EventList.module.css";

interface IEventList {
  list: Event[];
}

const EventList = ({ list }: IEventList) => {
  return (
    <ul className={styles.list}>
      {list.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EventList;
