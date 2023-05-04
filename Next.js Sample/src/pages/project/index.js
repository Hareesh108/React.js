import Link from 'next/link';
import data from './data.json';

const project = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/project1">Project1</Link>
        </li>
      </ul>
      <h1>This is Project Section</h1>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default project;
