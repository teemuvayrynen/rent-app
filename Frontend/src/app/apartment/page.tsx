"use client"

import SingleApartment from "@/components/SingleApartment/SingleApartment"
import { useSearchParams } from 'next/navigation'

const Apartment = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get("id");
    return(
        <SingleApartment id={id}/>
    )
}

export default Apartment