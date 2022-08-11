import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getProducts, IProduct } from "../utils/getProducts";

interface HomePageProps {
  products: IProduct[];
}
const HomePage: NextPage<HomePageProps> = ({ products }) => {
  // getStaticProps에서 반환받은 props

  return (
    <ul>
      {products.map((item: IProduct) => (
        <li key={item.id}>
          <Link href={`/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

// 이게 먼저 실행되고 컴포넌트 함수가 실행될 것임
export const getStaticProps: GetStaticProps = async () => {
  // Client side에서는 실행되지 않음
  console.log("(Re-)Generating...");
  const products = await getProducts();
  if (!products) {
    return {
      redirect: {
        // redirect의 값으로 destination과 permanent 프로퍼티가 필요함
        destination: "/no-data", // products가 없는 경우 /no-data로 라우팅
        permanent: false,
      },
    };
  }
  if (products.length === 0) {
    return { notFound: true };
  }
  return {
    props: {
      products,
    },
    revalidate: 10, // 10초마다 재빌드
  }; // props키가 있는 객체를 반환
};
export default HomePage;
