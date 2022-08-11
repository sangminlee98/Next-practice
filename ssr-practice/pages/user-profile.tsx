import { GetServerSideProps, NextPage } from "next/types";
import React from "react";

interface IUserProfilePageProps {
  username: string;
}

const UserProfilePage: NextPage<IUserProfilePageProps> = ({ username }) => {
  return <h1>{username}</h1>;
};

export default UserProfilePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, req, res } = context;
  console.log("Server Side Code");
  return {
    props: {
      username: "Max",
    },
  };
};
