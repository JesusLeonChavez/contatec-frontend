import React from "react"
import styles from "../../styles/sections/Login.module.css"
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"
export default function FormMenu() {
  return (
    <div className={styles.divContainerForm}>
      <FormControl id="first-name" isRequired>
        <FormLabel>Correo electrónico</FormLabel>
        <Input type="email" placeholder="First name" />
        <FormLabel>Contraseña</FormLabel>
        <Input type="password" placeholder="Password" />
        <Button variant="primary" isFullWidth my="10px">
          Iniciar Sesion
        </Button>
        <Button
          variant="facebook"
          leftIcon={<ZIcon name="facebook" />}
          isFullWidth
          my="10px"
        >
          Facebook
        </Button>
        <Button
          variant="google"
          leftIcon={<ZIcon name="google" />}
          isFullWidth
          my="10px"
        >
          Continuar con google
        </Button>
      </FormControl>
    </div>
  )
}
