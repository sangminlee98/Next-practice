import axios from "axios";
import useSWR from "swr";
import React, { useEffect, useState } from "react";
import { GetStaticProps, NextPage } from "next";

interface ISale {
  id: string;
  username: string;
  volume: string;
}
interface ILastSalesPageProps {
  salesData: ISale[];
}
const LastSalesPage: NextPage<ILastSalesPageProps> = ({ salesData }) => {
  const [sales, setSales] = useState<ISale[] | undefined>(salesData);
  // const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR("salesList", async () => {
    const response = await axios.get(
      "https://nextjs-course-29d4b-default-rtdb.firebaseio.com/sales.json"
    );
    return response.data;
  });

  useEffect(() => {
    if (data) {
      const formatSales: ISale[] = [];
      for (const key in data) {
        formatSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(formatSales);
    }
  }, [data]);
  // useEffect(() => {
  //   setIsLoading(true);
  //   axios
  //     .get("https://nextjs-course-29d4b-default-rtdb.firebaseio.com/sales.json")
  //     .then((res) => {
  //       const formatSales: ISale[] = [];
  //       for (const key in res.data) {
  //         formatSales.push({
  //           id: key,
  //           username: res.data[key].username,
  //           volume: res.data[key].volume,
  //         });
  //       }
  //       setSales(formatSales);
  //       setIsLoading(false);
  //     });
  // }, []);
  if (error) return <p>Failed to load.</p>;
  if (!sales) return <p>Loading...</p>;
  return (
    <ul>
      {sales?.map((item) => (
        <li key={item.id}>
          {item.username} - ${item.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await axios.get(
    "https://nextjs-course-29d4b-default-rtdb.firebaseio.com/sales.json"
  );
  const formatSales: ISale[] = [];
  for (const key in response.data) {
    formatSales.push({
      id: key,
      username: response.data[key].username,
      volume: response.data[key].volume,
    });
  }
  return {
    props: {
      salesData: formatSales,
    },
  };
};
