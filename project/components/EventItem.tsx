import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./EventItem.module.css";
import { IDummyEvent } from "../types";

interface IEventItem {
  item: IDummyEvent;
}

const EventItem = ({ item }: IEventItem) => {
  const humanReadableDate = new Date(item.date).toLocaleDateString("ko", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = item.location.replace(", ", "\n");
  return (
    <li className={styles.item}>
      <Image
        src={"/" + item.image}
        priority={item.id === "e2"}
        width="100%"
        height="10rem"
        alt={item.id}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{item.title}</h2>
          <div className={styles.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={`/events/${item.id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
