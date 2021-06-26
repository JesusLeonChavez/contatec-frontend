import { useRouter } from "next/router"

// import { useEffect } from "react"

// import { post, setAuth } from "../../../utils/http"

// import { useToast } from "@chakra-ui/react"

import PasswordReset from "../../../sections/Update/PasswordReset"

export default function Activar() {
  const router = useRouter()

  return (
    <>
      <PasswordReset router={router} />
    </>
  )
}
