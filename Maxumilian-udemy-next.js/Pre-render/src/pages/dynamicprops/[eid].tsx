import fs from 'fs/promises';
import { GetStaticPaths, GetStaticProps } from 'next';
import path from 'path';

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

function ProductDetails(props: Array) {
  console.log(props);
  
  const { loadedProduct } = props;

  // // Adding condition
  // if(!loadedProduct){
  //     return <h2>Loading...</h2>
  // }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>Description</p>
    </>
  );
}

export default ProductDetails;

// we can add function to get data
async function getData() {
  const dataPath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = await fs.readFile(dataPath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export const getStaticProps:GetStaticProps = async (context)  => {
  console.log(context);
  
  const { params,locales,locale,defaultLocale } = context;
  console.log(params)
  console.log(locales)
  console.log(locale)
  console.log(defaultLocale)

  const productId = params?.eid;

  const data = await getData();

  const product = data.products.find(
    (product: { id: string }) => product.id === productId
  );

  return {
    props: {
      loadedProduct: product,
    },

  };
}

type ID = {
    id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();

// Approach 02
  const ids = data.products.map((product:ID) => product.id)
  const pathsParams = ids.map((id:ID) => ({ params: { eid: id } }))

  console.log(pathsParams);
  

  return {
    // // Approach 01
    // paths: [
    //   { params: { eid: 'p1' } },
    //   { params: { eid: 'p2' } },
    //   // { params: {eid : 'p3'} },
    //   // { params: {eid : 'p4'} }
    // ],
    // Approach 02
    paths: pathsParams,
    // fallback: false // Mandatory to add all items
    // fallback: true // we can partially but we have add condition for load if we not add condition so it not possible instance fetch data.
    //Without condition add we can use 'blocking' but it will take more time than true.
    fallback: 'blocking',
  };
};
