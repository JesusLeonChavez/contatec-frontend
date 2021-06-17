import { /* FormControl */ FormLabel, Input, Button } from "@chakra-ui/react"
import styles from "../../styles/sections/Reset.module.css"
// import Image from "next/image"

export default function FormReset() {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Restablecer Contraseña</h1>
      <p className={styles.p}>
        Ingresa el correo asociado a tu cuenta y nos comunicaremos contigo
      </p>
      <FormLabel className={styles.Label}>Correo Electronico *</FormLabel>
      <Input
        className={styles.Entrada}
        type="email"
        placeholder="Escribe tu correo aqui"
      />
      <Button className={styles.Boton} variant="primary" isFullWidth>
        Enviar
      </Button>
    </div>
  )
}
