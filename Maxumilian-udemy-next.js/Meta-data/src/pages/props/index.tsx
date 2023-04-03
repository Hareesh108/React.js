import { GetStaticProps } from "next";
import {data} from '../../../data/data';
import Link from "next/link";

 type Props  = {
  id:number,
  name:string,
  email:string,
  phone:number,
  surname:string
}

export default function Home(props:Props) {

  // console.log(props);
  
  return (
    <>
      <Link href={'/'} >Home</Link>

      <h2>{props.id}</h2>
      <h2>{props.name}</h2>
      <h2>{props.email}</h2>
      <h2>{props.phone}</h2>
      <h2>{props.surname}</h2>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
      props: {
        id : data.id,
        name : data.name,
        email : data.email,
        phone : data.phone,
        surname: data.surname
      },
      revalidate: 5
    }
}