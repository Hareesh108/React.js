import Link from 'next/link';
import myData from './myData';

const services = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/project">Project</Link>
        </li>
      </ul>
      <h1>This is Service Section</h1>
      {  
        myData.map((service) => {
          return (
            <div key={service.id}>
              <h2>{service.name}</h2>
              <h4>{service.version}</h4>
              <h4>{service.author}</h4>
              <p>{service.description}</p>
            </div>
          )
        })
      }
    </>
  );
};

export default services;
