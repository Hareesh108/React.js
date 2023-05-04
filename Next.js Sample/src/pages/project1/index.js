import Link from 'next/link';
import data from './data.json';
import { useRouter } from 'next/router';

const project = () => {

  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services" prefetch as='hiiiiiii' > Services</Link>
        </li>
      </ul>
      <h1>This is Project Section</h1>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              {/* Navigating Dynamic Route  */}

              <Link href={{
              pathname:'project1/[id]',
              query: {
                id: item.id,
                name: item.name,
                description: item.description
              },
              as: 'project1'
            }} >{item.name}</Link>

              <Link href={`project1/${item.id}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>

        {/* Using Programmatically and Imperatively */}
        <button onClick={()=> router.push('project1/i') } >Click</button>
        <button onClick={() => router.push({
          pathname:'project1/[d]',
          query: {d: 'project1',
        name:"Hareesh"}
        })} >Click</button>
        <button onClick={() => router.push({
          pathname:'project1/id',
          query: {myID: 'project1',
        name:"Hareesh"}
        })} >Click</button>

    </>
  );
};

export default project;
