import Link from 'next/link';
import { useRouter } from 'next/router';

const project = () => {
  
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  console.log(router.route);
 console.log(router.asPath);
 
 
  const item = router.query;
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/project1">Projects</Link>
        </li>
      </ul>
      <div>
        <h2>{item.id}</h2>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
      </div>
    </>
  );
};

export default project;
