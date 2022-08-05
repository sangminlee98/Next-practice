import path from "path";
import fs from "fs/promises"; // 브라우저 측 자바스크립트가 파일 시스템에 접근할 수 없기 때문에 클라이언트 사이드에서는 fs 모듈 작업이 안됨

export interface IProduct {
  id: string;
  title: string;
  description: string;
}

// products 데이터를 가져오는 함수
export const getProducts = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json"); // file경로를 루트 디렉토리의 data/dummy-backend.json
  const jsonData = await fs.readFile(filePath); // dummy-backend.json 파일을 읽음
  const { products }: { products: IProduct[] } = JSON.parse(
    jsonData as unknown as string
  );
  return products;
};
