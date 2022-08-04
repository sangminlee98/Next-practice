import { GetStaticProps, NextPage } from "next";
import fs from "fs/promises"; // 브라우저 측 자바스크립트가 파일 시스템에 접근할 수 없기 때문에 클라이언트 사이드에서는 fs 모듈 작업이 안됨
import path from "path";
import Link from "next/link";

export interface IProduct {
  id: string;
  title: string;
  description: string;
}
interface HomePageProps {
  products: IProduct[];
}
const HomePage: NextPage<HomePageProps> = ({ products }) => {
  // getStaticProps에서 반환받은 props

  return (
    <ul>
      {products.map((item: any) => (
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
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json"); // file경로를 루트 디렉토리의 data/dummy-backend.json
  const jsonData = await fs.readFile(filePath); // dummy-backend.json 파일을 읽음
  const { products } = JSON.parse(jsonData as unknown as string);
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
