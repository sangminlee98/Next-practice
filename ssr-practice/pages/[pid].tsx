import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { getProducts, IProduct } from "../utils/getProducts";

interface ProductDetailPageProps {
  product: IProduct;
}
const ProductDetailPage: NextPage<ProductDetailPageProps> = ({ product }) => {
  if (!product) return <div>Loading...</div>; // product가 존재하지 않으면 로딩, fallback을 true로 했을 경우 필요한 코드 'blocking'으로 한 경우는 필요 없음
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
  const products = await getProducts();
  const product = products.find((product) => product.id === productId); // products 배열 중 동적 매개변수 id값과 일치하는 데이터만 반환
  if (!product) {
    // product가 없으면 not found 페이지를 보여줌
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product,
    },
  };
};

// 동적 페이지의 어떤 인스턴스를 생성할지 Next.js에 알리는 함수
export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts();
  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => ({
    params: { pid: id },
  }));
  return {
    // paths: [
    //   { params: { pid: "p1" } },
    //   { params: { pid: "p2" } },
    //   { params: { pid: "p3" } },
    // ],
    paths,
    fallback: true, // true, false, 'blocking'
  };
};

export default ProductDetailPage;
