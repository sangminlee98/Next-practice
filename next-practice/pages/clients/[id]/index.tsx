import { useRouter } from "next/router";
import React from "react";

const CLientsProjectsPage = () => {
  const router = useRouter();
  const onPageLoadHandler = () => {
    router.push(`/clients/${router.query.id}/projectA`);
  };
  return (
    <div>
      <h1>The Projects of {router.query.id}</h1>
      <button onClick={onPageLoadHandler}>Project A</button>
    </div>
  );
};

export default CLientsProjectsPage;
