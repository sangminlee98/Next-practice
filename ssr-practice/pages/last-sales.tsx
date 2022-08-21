import axios from "axios";
import React, { useEffect, useState } from "react";

interface ISale {
  id: string;
  username: string;
  volume: string;
}

const LastSalesPage = () => {
  const [sales, setSales] = useState<ISale[] | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://nextjs-course-29d4b-default-rtdb.firebaseio.com/sales.json")
      .then((res) => {
        const formatSales: ISale[] = [];
        for (const key in res.data) {
          formatSales.push({
            id: key,
            username: res.data[key].username,
            volume: res.data[key].volume,
          });
        }
        setSales(formatSales);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (!sales) return <p>No data</p>;
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
