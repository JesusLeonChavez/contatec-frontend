import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  Button
} from "@chakra-ui/react"
import Link from "next/link"
import styles from "../../styles/sections/Reset.module.css"
import ZIcon from "../../components/Icon/Logo"
import { useForm } from "../../utils/hooks/useForm"
import { useError } from "../../utils/hooks/useError"
import { validNewPassword } from "./utils/valid"
import { post, setAuth } from "../../utils/http"
import { useState } from "react"
import showToast from "../../components/Toast"

export default function PasswordReset({ router }) {
  const [isPosting, setIsPosting] = useState(false)

  // eslint-disable-next-line camelcase

  const [values, handleInputChange] = useForm({
    password: "",
    password2: ""
  })
  const [errors, setErrors] = useError({
    password: "",
    password2: ""
  })

  const { password, password2 } = values

  const handleSubmit = async e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validNewPassword(values)
    setErrors(errorsForm)
    if (isValid) {
      console.log("enviando contraseñas")
      // eslint-disable-next-line camelcase
      const reset_token = router.query.token
      setAuth(reset_token)
      setIsPosting(true)
      await post("/api/user/reset", {
        // eslint-disable-next-line camelcase
        password: values.password
      })
        .then(res => {
          setIsPosting(false)
          if (res.data.msg === "Autenticación inválida") {
            showToast(
              "Error al restablecer contraseña",
              "JWT expirado",
              "error"
            )
          } else {
            showToast(
              "Éxito al restablecer contraseña",
              "Se restableció contraseña correctamente",
              "success"
            )
            router.push("/")
          }
          console.log("resReseto:", res)
        })
        .catch(respError => console.log("respError: ", respError))
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
        <p className={styles.p}>Ingrese su nueva contraseña</p>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel className={styles.Label}>Nueva contraseña *</FormLabel>
            <Input
              // borderColor="black.100"
              bg="white"
              my="2"
              name="password"
              type="password"
              value={password}
              placeholder="Escribe tu contraseña aquí"
              onChange={handleInputChange}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password2}>
            <FormLabel className={styles.Label}>
              Confirmar contraseña *
            </FormLabel>
            <Input
              bg="white"
              my="2"
              name="password2"
              type="password"
              value={password2}
              placeholder="Escribe tu contraseña aquí"
              onChange={handleInputChange}
            />
            <FormErrorMessage>{errors.password2}</FormErrorMessage>
          </FormControl>
          <Button
            variant="primary"
            type="submit"
            className="buttonDisabledPrimary"
            isLoading={isPosting}
          >
            Aceptar
          </Button>
        </form>
      </div>
    </div>
  )
}
