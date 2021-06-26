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
import { useForm } from "./hooks/useForm"
import { useErrorNewPassword } from "./hooks/useError"
import { validNewPassword } from "./utils/valid"

export default function FormPassword() {
  const [values, handleInputChange] = useForm({
    password: "",
    password2: ""
  })
  const [errors, setErrors] = useErrorNewPassword({
    password: "",
    password2: ""
  })

  const { password, password2 } = values

  const handleSubmit = e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validNewPassword(values)
    setErrors(errorsForm)
    if (isValid) {
      console.log("enviando contraseñas")
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
        <p className={styles.p}>Ingresa su nueva contraseña</p>
        <form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel className={styles.Label}>Nueva contraseña *</FormLabel>
            <Input
              borderColor="black.100"
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
              borderColor="black.100"
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
          <Button variant="primary" type="submit" className={styles.Boton}>
            Aceptar
          </Button>
        </form>
      </div>
    </div>
  )
}
