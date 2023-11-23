import { useState, useEffect } from 'react';
import { fetchUserAttributes } from "aws-amplify/auth"
import { useRouter, usePathname } from 'next/navigation';

const useUserData = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    (async () => {
      try {
        const userRes = await fetchUserAttributes();
        if (userRes) {
          setUser(userRes)
        }
      } catch (err) {   
        if (pathname.includes("addApartment") || pathname.includes("account")) {
          router.push("/search")
        }
      }
    })()
  }, [])

  return { user }
}

export default useUserData;