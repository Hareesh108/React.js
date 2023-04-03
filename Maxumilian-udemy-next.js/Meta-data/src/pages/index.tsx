import Link from "next/link";

export default function Home() {
  
  const name = "Hareesh"

  return (
    <>
      <Link href={'/props'} >GetStaticProps</Link>
    </>
  )
}
