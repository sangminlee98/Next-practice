import { useRouter } from "next/router";
import React from "react";

const EventDetailPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Event Detail</h1>
      {JSON.stringify(router.query)}
    </div>
  );
};

export default EventDetailPage;
