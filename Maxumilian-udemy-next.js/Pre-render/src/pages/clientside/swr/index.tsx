import { useEffect, useState } from 'react';
import useSWR from 'swr';

type User = {
  id: null | undefined;
  username: string;
  valumn: number;
};

export default function ClientData() {
  const [sales, setSales] = useState([]);

  const { data, error } = useSWR(
    'api/data',
    () => fetch('https://nextjs-demo-90bdd-default-rtdb.firebaseio.com/sales.json').then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const store: any = [];

      for (let key in data) {
        store.push({
          id: key,
          username: data[key].username,
          valumn: data[key].valumn,
        });
      }
      setSales(store);
    }
  }, [data]);

  if (error) {
    return <h1>Failed to load</h1>;
  }

  if (!data || !sales) {
    return <h1>Loading...</h1>;
  }

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
