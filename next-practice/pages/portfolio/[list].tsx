import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const ListPage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>The List Page</h1>
      <p>{router.query.list}</p>
    </div>
  );
};

export default ListPage;
