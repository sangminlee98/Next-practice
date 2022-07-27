import { useRouter } from "next/router";
import React from "react";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultsTitle";
import { getFilteredEvents } from "../../dummy-data";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading...</p>;
  }
  const year = +filterData[0];
  const month = +filterData[1];
  if (isNaN(year) || isNaN(month) || year > 2030 || month < 1 || month > 12) {
    return <p>invalid filter</p>;
  }
  const filteredList = getFilteredEvents({
    year,
    month,
  });
  if (!filteredList || filteredList.length === 0) {
    return <p>No Event found</p>;
  }
  const date = new Date(year, month - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList list={filteredList} />
    </div>
  );
};

export default FilteredEventsPage;
