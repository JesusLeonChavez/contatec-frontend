import { useRouter } from "next/router"
import { useEffect } from "react"
import { post } from "../../../utils/http"
import { Button } from "@chakra-ui/react"

export default function Activar() {
  const router = useRouter()

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
      .then(res => console.log("respActivarToken: ", res))
      .catch(respError => console.log("respError: ", respError))
  }, [router])
  return (
    <div>
      <h1>Activa token</h1>
      <Button
        onClick={() => {
          router.push("/")
        }}
      >
        Iniciar sesion
      </Button>
    </div>
  )
}
