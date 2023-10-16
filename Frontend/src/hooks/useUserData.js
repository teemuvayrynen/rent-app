import { useState, useEffect } from 'react';
import { Auth } from "aws-amplify"
import { useRouter, usePathname } from 'next/navigation';

const useUserData = () => {
  const [user, setUser] = useState(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    (async () => {
      try {
        const result = await Auth.currentAuthenticatedUser()
        if (result) {
          setUser(result)
        }
      } catch (err) {   
        if (pathname !== "/" && pathname !== "/search") {
          router.push("/search")
        }
      }
    })()
  }, [])

  return { user }
}

export default useUserData;