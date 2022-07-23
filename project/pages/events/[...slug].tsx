import { useRouter } from "next/router";
import React from "react";

const FilteredEventsPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Filtered Events</h1>
      {JSON.stringify(router.query)}
    </div>
  );
};

export default FilteredEventsPage;
