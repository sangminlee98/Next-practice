import { GetStaticProps, NextPage } from "next";
import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

interface IHomePageProps {
  filteredList: Event[];
}
const HomePage: NextPage<IHomePageProps> = ({ filteredList }) => {
  return (
    <div>
      <EventList list={filteredList} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const featuredList = await getFeaturedEvents();
  return {
    props: {
      filteredList: featuredList,
    },
    revalidate: 10,
  };
};

export default HomePage;
