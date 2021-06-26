import {
  FormLabel,
  FormControl,
  Input,
  Button,
  FormErrorMessage,
  useToast
} from "@chakra-ui/react"
import { useState } from "react"
import Link from "next/link"
import styles from "../../styles/sections/Reset.module.css"
import ZIcon from "../../components/Icon/Logo"
import { useForm } from "./hooks/useForm"
import { useErrorReset } from "./hooks/useError"
import { validReset } from "./utils/valid"
import { post } from "../../utils/http"

export default function FormReset() {
  const [values, handleInputChange] = useForm({
    email: ""
  })

  const [errors, setErrors] = useErrorReset({
    email: ""
  })

  const toast = useToast()
  const showToast = (type, title, message) => {
    toast({
      title: `${title}`,
      description: `${message}`,
      position: "top",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      status: `${type}`,
      duration: 9000,
      isClosable: true
    })
  }
  const { email } = values
  const [isPosting, setIsPosting] = useState(false)
  const handleSubmit = async e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validReset(values)
    setErrors(errorsForm)
    if (isValid) {
      console.log("enviando correo")
      setIsPosting(true)
      const resp = await post("/api/user/forgot", {
        us_correo: values.email
      })
      if (resp.data?.statusCode) {
        showToast("error", "Error en el envío", resp.data?.message[0])
      } else {
        showToast(
          "success",
          "Envío exitoso.",
          "Se envio un mensaje a su correo electrónico"
        )
      }
      console.log("resp: ", resp)
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
            className={styles.Boton}
            type="submit"
            isLoading={isPosting}
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  )
}
