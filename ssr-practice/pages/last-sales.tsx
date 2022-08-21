import axios from "axios";
import useSWR from "swr";
import React, { useEffect, useState } from "react";

interface ISale {
  id: string;
  username: string;
  volume: string;
}

const LastSalesPage = () => {
  // const [sales, setSales] = useState<ISale[] | undefined>();
  // const [isLoading, setIsLoading] = useState(false);

  const getSales = async () => {
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
    return formatSales;
  };
  const { data, error } = useSWR("sales", getSales);

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
  if (!data) return <p>Loading...</p>;
  return (
    <ul>
      {data?.map((item) => (
        <li key={item.id}>
          {item.username} - ${item.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;
