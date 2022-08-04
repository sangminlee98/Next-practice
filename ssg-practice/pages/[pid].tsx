import { GetStaticProps, NextPage } from "next";
import path from "path";
import fs from "fs/promises";
import React from "react";
import { IProduct } from ".";

interface ProductDetailPageProps {
  product: IProduct;
}
const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ product }) => {
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // params는 context 객체의 프로퍼티 중 하나
  // params는 키-값 쌍이 있는 객체이며 키의 식별자는 동적 경로 세그먼트
  const { params } = context;
  const productId = params?.pid;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json"); // file경로를 루트 디렉토리의 data/dummy-backend.json
  const jsonData = await fs.readFile(filePath); // dummy-backend.json 파일을 읽음
  const { products }: { products: IProduct[] } = JSON.parse(
    jsonData as unknown as string
  );
  return {
    props: {
      product: products.find((product) => product.id === productId), // products 배열 중 동적 매개변수 id값과 일치하는 데이터만 반환
    },
  };
};

export default ProductDetailPage;
