import { useRouter } from "next/router"
import PasswordReset from "../../../sections/User/PasswordReset"

export default function Activar() {
  const router = useRouter()

  return (
    <>
      <PasswordReset router={router} />
    </>
  )
}
