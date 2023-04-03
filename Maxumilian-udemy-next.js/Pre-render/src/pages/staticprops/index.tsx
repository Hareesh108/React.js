// import data from '../../data/data.json';
import fs from 'fs/promises';
import path from 'path';

import { GetStaticProps } from 'next';

type Data = {
  id : string,
  title : string,
}
interface Array  {
  [key:string] : {
    map: any;
    id : string,
  title : string,
  }
}

export default function StaticProps(props:Array) {
  const { products } = props;

  return (
    <>
      <ul>
        {products.map((item:Data) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log("Re-Generating: Incremental Static Generation");
  
  const dataPath = path.join(process.cwd(),'data','data.json');
   const jsonData  = await fs.readFile(dataPath)
   const data = JSON.parse(jsonData.toString())


  //  if(!data){
  //   return {
  //     redirect : {
  //       destination : './nodata'
  //     }
  //   }
  //  }

  //  if(data.products.length === 0){
  //   return { notFound:true }
  //  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 5,
  };
};
