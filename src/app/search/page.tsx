import DynamicMap from '../../components/Map/index'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer'
import ApartmentList from '../../components/ApartmentList/ApartmentList'

export default function SearchPage() {

  return (
    <>
      <Navbar />
      <DynamicMap />
      <ApartmentList />
      <Footer />
    </>
  )
}