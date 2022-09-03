import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./EventItem.module.css";
import { Event, IDummyEvent } from "../../types";
import Button from "../ui/Button";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AdressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

interface IEventItem {
  item: Event;
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
        width="200px"
        height="200px"
        priority
        alt={item.id}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{item.title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${item.id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
