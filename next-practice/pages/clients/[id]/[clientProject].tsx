import { useRouter } from 'next/router';
import React from 'react';

const SelectedClientProjectPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>The Project Page for a {router.query.id} for a {router.query.clientProject}</h1>
    </div>
  );
};

export default SelectedClientProjectPage;