import React from "react"
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Hello, there!!</h1>
      <p>Welcome to my website</p>

      <ul>
        <li>
        <Link href="/project" >Project</Link>
        </li>
        <li>
          <Link href="/services" >Services</Link>
        </li>
        <li>
          <Link href="/something" >Page Not Found</Link>
        </li>
      </ul>
    </>
  )
}
