import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default async  function Home() {
  let response = await fetch('/api')
  console.log(await response.text());
  

  return (
    <div className="">
      <h1>Home</h1>
      <Link href={'/about'}>about</Link>
    </div>
  )
}
