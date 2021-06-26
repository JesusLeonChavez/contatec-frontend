import { Link, FormLabel, Input, Button } from "@chakra-ui/react"
import styles from "../../styles/sections/Reset.module.css"
import ZIcon from "../../components/Icon/Logo"

export default function FormPassword() {
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
        <p className={styles.p}>Inresa su nueva contraseña</p>
        <FormLabel className={styles.Label}>Nueva contraseña *</FormLabel>
        <Input
          borderColor="black.100"
          bg="white"
          className={styles.Entrada}
          type="password"
          placeholder="Escribe tu contraseña aquí"
        />
        <FormLabel className={styles.Label}>Confirmar contraseña *</FormLabel>
        <Input
          borderColor="black.100"
          bg="white"
          className={styles.Entrada}
          type="password"
          placeholder="Escribe tu contraseña aquí"
        />
        <Button variant="primary" className={styles.Boton}>
          Aceptar
        </Button>
      </div>
    </div>
  )
}
