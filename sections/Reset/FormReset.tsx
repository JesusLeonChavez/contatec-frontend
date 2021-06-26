import {
  FormLabel,
  FormControl,
  Input,
  Button,
  FormErrorMessage
} from "@chakra-ui/react"
import Link from "next/link"
import styles from "../../styles/sections/Reset.module.css"
import ZIcon from "../../components/Icon/Logo"
import { useForm } from "./hooks/useForm"
import { useErrorReset } from "./hooks/useError"
import { validReset } from "./utils/valid"

export default function FormReset() {
  const [values, handleInputChange] = useForm({
    email: ""
  })

  const [errors, setErrors] = useErrorReset({
    email: ""
  })
  const { email } = values

  const handleSubmit = e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validReset(values)
    setErrors(errorsForm)
    if (isValid) {
      console.log("enviando correo")
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
          <Button variant="primary" className={styles.Boton} type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  )
}
