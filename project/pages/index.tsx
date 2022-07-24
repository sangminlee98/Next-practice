import React from "react";
import EventList from "../components/EventList";
import { getFeaturedEvents } from "../dummy-data";

const HomePage = () => {
  const filteredList = getFeaturedEvents();
  return (
    <div>
      <h1>The Home Page</h1>
      <EventList list={filteredList} />
    </div>
  );
};

export default HomePage;
