import React from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummy-data";

const AllEventsPage = () => {
  const events = getAllEvents();
  return (
    <>
      <EventSearch />
      <EventList list={events} />
    </>
  );
};

export default AllEventsPage;
