import { useRouter } from "next/router";
import React from "react";
import EventContent from "../../components/event-detail/EventContent";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventSummary from "../../components/event-detail/EventSummary";
import { getEventById } from "../../dummy-data";
const EventDetailPage = () => {
  const router = useRouter();
  const event = getEventById(router.query.eventId as string);
  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
