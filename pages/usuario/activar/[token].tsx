import { useRouter } from "next/router"
import { useEffect } from "react"
import { post } from "../../../utils/http"
import { useToast } from "@chakra-ui/react"
import ActiveAccount from "../../../sections/User/ActiveAccount"

export default function Activar() {
  const router = useRouter()
  const toast = useToast()
  const showToast = errMessage => {
    toast({
      title: "Error al activar cuenta.",
      description: `${errMessage}`,
      position: "top",
      status: "error",
      duration: 9000,
      isClosable: true
    })
  }

  // eslint-disable-next-line camelcase
  useEffect(() => {
    if (!router.query.token) {
      return
    }
    // eslint-disable-next-line camelcase
    const activation_token = router.query.token
    post("/api/user/activation", {
      // eslint-disable-next-line camelcase
      activation_token
    })
      .then(res => {
        if (res.data.name === "JsonWebTokenError") {
          showToast("JWT malformado")
        }
      })
      .catch(respError => console.log("respError: ", respError))
  }, [router])
  return (
    <>
      <ActiveAccount router={router} />
    </>
  )
}
