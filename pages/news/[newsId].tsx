import { useRouter } from 'next/router';
import React from 'react';

const Detail = () => {
  const router = useRouter();
  const newsId = router.query.newsId;
  return (
    <>
      <h1>Detail Page</h1>
      <p>{newsId}</p>
    </>
  );
};

export default Detail;