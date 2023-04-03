// import data from '../../data/data.json';
import fs from 'fs/promises';
import path from 'path';
import { GetStaticProps } from 'next';
import Link from 'next/link';

type Data = {
  id: string;
  title: string;
};

interface Array {
  [key: string]: {
    map: any;
    id: string;
    title: string;
  };
}
function DynamicProps(props: Array) {
  const { products } = props;

  return (
    <>
      <ul>
        {products.map((item: Data) => {
          return (
            <li key={item.id}>
              <Link href={`dynamicprops/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default DynamicProps;

export const getStaticProps: GetStaticProps = async () => {
  console.log('Re-Generating: Incremental Static Generation');

  const dataPath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(dataPath);
  const data = JSON.parse(jsonData.toString());

  return {
    props: {
      products: data.products,
    },
    revalidate: 5,
  };
};
