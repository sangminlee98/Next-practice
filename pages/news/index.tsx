import Link from 'next/link';
import React from 'react';

const News = () => {
  return (
    <>
      <h1>News PAGE</h1>
      <ul>
        <li><Link href={'/news/first-news'}>First news</Link></li> 
        <li><Link href={'/news/second-news'}>Second news</Link></li> 
      </ul>
    </>
  );
};

export default News;