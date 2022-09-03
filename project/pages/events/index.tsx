import { GetStaticProps, NextPage } from "next";
import React from "react";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../helpers/api-util";

interface IAllEventsPage {
  events: Event[];
}
const AllEventsPage: NextPage<IAllEventsPage> = ({ events }) => {
  return (
    <>
      <EventSearch />
      <EventList list={events} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
  };
};

export default AllEventsPage;
