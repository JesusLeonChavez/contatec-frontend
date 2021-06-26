import {
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  useToast
} from "@chakra-ui/react"
import Link from "next/link"
import styles from "../../styles/sections/Reset.module.css"
import ZIcon from "../../components/Icon/Logo"
import { useForm } from "./hooks/useForm"
import { useErrorNewPassword } from "./hooks/useError"
import { validNewPassword } from "./utils/valid"
import { post, setAuth } from "../../utils/http"
import { useState } from "react"

export default function FormPassword({ router }) {
  const [isPosting, setIsPosting] = useState(false)
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

  // eslint-disable-next-line camelcase

  const [values, handleInputChange] = useForm({
    password: "",
    password2: ""
  })
  const [errors, setErrors] = useErrorNewPassword({
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
              "error",
              "Error al restablecer contraseña",
              "JWT expirado"
            )
          } else {
            showToast(
              "success",
              "Éxito al restablecer contraseña",
              "Se restableció contraseña correctamente"
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
            className={styles.Boton}
            isLoading={isPosting}
          >
            Aceptar
          </Button>
        </form>
      </div>
    </div>
  )
}
