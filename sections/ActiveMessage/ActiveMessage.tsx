import { Text, Flex } from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"
import styles from "../../styles/sections/ActiveMessage.module.css"

export default function ActiveMessage() {
  return (
    <div
      className={styles.infoContainer}
      style={{ backgroundColor: "var(--secondary)" }}
    >
      <div className={styles.infoWrapper}>
        <Flex direction="column" align="center" justify="center">
          <Text
            fontSize="4xl"
            align="center"
            color="primary"
            className="bold600"
          >
            ¡ Gracias por registrarse con nosotros !
          </Text>
          <Text fontSize="2xl" align="center" color="primary">
            Se ha enviado un mensaje de confirmación al correo proporcionado
            para poder iniciar sesión
          </Text>
          <ZIcon name="logo" color="primary" size={40} />
        </Flex>
      </div>
    </div>
  )
}
