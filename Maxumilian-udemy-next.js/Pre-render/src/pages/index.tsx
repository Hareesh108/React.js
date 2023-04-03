import Link from "next/link"

export default function Home() {

  return (
    <>
      <Link href="./staticprops">StaticProps</Link>
      <h1></h1>
      <Link href="./dynamicprops">DynamicProps</Link>
      <h1></h1>
      <Link href="./serversideprops">ServerSideProps</Link>
      <h1></h1>
      <Link href="./clientside">ClientSideDataFetch</Link>

      <h1>This is Home Page</h1>
    </>
  );
}

