import Link from "../../node_modules/next/link"

export default function Home() {
  return (
    <>
      <h1>UniRent Landing page</h1>
      <Link href="/search">
        Go to Search Page
      </Link>
    </>
  )
}