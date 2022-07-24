import React from "react";
import { IDummyEvent } from "../types";
import EventItem from "./EventItem";

interface IEventLIst {
  list: IDummyEvent[];
}

const EventList = ({ list }: IEventLIst) => {
  return (
    <ul>
      {list.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EventList;
