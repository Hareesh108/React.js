import { useQuery } from 'react-query';

function YourComponent() {
  const { data, status, error, isLoading } = useQuery(
    'your-query-key',
    () => fetch('https://your-api.com/data')
      .then(res => res.json())
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Data: {JSON.stringify(data)}</div>;
}

export default YourComponent;
