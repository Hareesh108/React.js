import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
type User = {
  id: null | undefined;
  username: string;
  valumn: number;
};

export default function ClientData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://nextjs-demo-90bdd-default-rtdb.firebaseio.com/sales.json')
      .then((response) => response.json())
      .then((data) => {
        const storeData: any = [];
        for (let key in data) {
          storeData.push({
            id: key,
            username: data[key].username,
            valumn: data[key].valumn,
          });
        }
        setData(storeData);
      });
    

    setLoading(false);
    console.log(data);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return <h1>Not Yet...</h1>;
  }

  return (
    <ul>
      {data.map((sale: User) => (
        <li key={sale.id}>
          {' '}
          {sale.username} - ${sale.valumn}
        </li>
      ))}
      <li><Link href='./clientside/swr' >SWR</Link></li>
      <li><Link href='./clientside/staticprops' >GetStaticProps</Link></li>
    </ul>
  );
}
