import Image from "next/image";
import Link from "next/link";
import React from "react";
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
    <li>
      <Image
        src={"/" + item.image}
        width="400px"
        height="500px"
        alt={item.id}
      />
      <div>
        <div>
          <h2>{item.title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address style={{ wordBreak: "break-all" }}>
              {formattedAddress}
            </address>
          </div>
        </div>
        <div>
          <Link href={`/events/${item.id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
