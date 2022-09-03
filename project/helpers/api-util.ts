import axios from "axios";
import { Events } from "../types";

export const getAllEvents = async () => {
  const { data } = await axios.get<Events>(
    "https://nextjs-course-29d4b-default-rtdb.firebaseio.com/events/events.json"
  );
  return data.events;
};
export const getFeaturedEvents = async () => {
  const { data } = await axios.get<Events>(
    "https://nextjs-course-29d4b-default-rtdb.firebaseio.com/events/events.json"
  );
  const featuredList = data.events.filter((event) => event.isFeatured);
  return featuredList;
};
