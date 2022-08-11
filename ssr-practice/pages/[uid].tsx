import { GetServerSideProps, NextPage } from "next/types";
import React from "react";

interface IUserIdPageProps {
  id: string;
}

const UserIdPage: NextPage<IUserIdPageProps> = ({ id }) => {
  return <h1>{id}</h1>;
};

export default UserIdPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const userId = params?.uid;
  console.log("Server Side Code");
  return {
    props: {
      id: "userid-" + userId,
    },
  };
};
