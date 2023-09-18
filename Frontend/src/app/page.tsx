import Link from "next/link"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>UniRent Landing page</h1>
      <Link href="/search">
        Go to Search Page
      </Link>
      <Footer />
    </>
  )
}
