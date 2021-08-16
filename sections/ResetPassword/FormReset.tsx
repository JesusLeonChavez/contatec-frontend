import {
  FormLabel,
  FormControl,
  Input,
  Button,
  FormErrorMessage
} from "@chakra-ui/react"
import { useState } from "react"
import Link from "next/link"
import styles from "../../styles/sections/Reset.module.css"
import ZIcon from "../../components/Icon/Logo"
import { useForm } from "../../utils/hooks/useForm"
import { useError } from "../../utils/hooks/useError"
import { validReset } from "./utils/valid"
import { post } from "../../utils/http"
import showToast from "../../components/Toast"

export default function FormReset() {
  const [values, handleInputChange] = useForm({
    email: ""
  })

  const [errors, setErrors] = useError({
    email: ""
  })

  const { email } = values
  const [isPosting, setIsPosting] = useState(false)
  const handleSubmit = async e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validReset(values)
    setErrors(errorsForm)
    if (isValid) {
      // console.log("enviando correo")
      setIsPosting(true)
      const resp = await post("/api/user/forgot", {
        us_correo: values.email
      })
      if (resp.data?.statusCode) {
        showToast("Error en el envío", resp.data?.message[0], "error")
      } else {
        showToast(
          "Envío exitoso.",
          "Se envio un mensaje a su correo electrónico",
          "success"
        )
      }
      // console.log("resp: ", resp)
      setIsPosting(false)
    }
  }

  return (
    <div className={styles.conteiner}>
      <div className={styles.conteinerBlanco}>
        <div>
          <Link href="/">
            <a>
              <ZIcon name="logo" />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.conteinerConFondo}></div>
      <div className={styles.conteinerForm}>
        <h1 className={styles.h1}>Restablecer Contraseña</h1>
        <p className={styles.p}>
          Ingresa el correo asociado a tu cuenta y nos comunicaremos contigo
        </p>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel className={styles.Label}>Correo Electrónico *</FormLabel>
            <Input
              borderColor="black.100"
              bg="white"
              my="2"
              type="email"
              name="email"
              placeholder="Escribe tu correo aquí"
              onChange={handleInputChange}
              value={email}
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <Button
            variant="primary"
            type="submit"
            isLoading={isPosting}
            className="buttonDisabledPrimary"
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  )
}
