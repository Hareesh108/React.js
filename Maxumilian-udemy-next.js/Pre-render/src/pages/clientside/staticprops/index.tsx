type User = {
  id: null | undefined;
  username: string;
  valumn: number;
};

// type Sales = {
//   sales:{
//     s1:{
//       id: null | undefined | string;
//       username: string;
//       valumn: number;
//     },
//     s2:{
//       id: null | undefined | string;
//       username: string;
//       valumn: number;
//     }
//   }
// }

export default function ClientData(props) {
  const { sales } = props;

  console.log(sales);

  return (
    <ul>
      {sales.map((sale: User) => (
        <li key={sale.id}>
          {' '}
          {sale.username} - ${sale.valumn}
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    'https://nextjs-demo-90bdd-default-rtdb.firebaseio.com/sales.json'
  );
  const data = await response.json();

  const storeData: any = [];
  for (let key in data) {
    storeData.push({
      id: key,
      username: data[key].username,
      valumn: data[key].valumn,
    });
  }

  return {
    props: {
      sales: storeData,
    },
    revalidate: 5,
  };
};
