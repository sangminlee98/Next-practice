import React from "react";
import { IDummyEvent } from "../types";

interface IEventItem {
  item: IDummyEvent;
}

const EventItem = ({ item }: IEventItem) => {
  return (
    <div>
      <p>{JSON.stringify(item)}</p>
    </div>
  );
};

export default EventItem;
