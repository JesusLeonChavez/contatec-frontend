import styles from "../../styles/sections/Show.module.css"
import { FormLabel, Input, Button, Text } from "@chakra-ui/react"

export default function Show() {
  return (
    <div>
      <Text className={styles.labelPrincipal}>Datos personales</Text>
      <p className={styles.labelsub}>
        Puedes cambiar los datos de tu perfil cuantas veces lo consideres
        necesario.
      </p>
      <div className={styles.Entrada}>
        <div>
          <FormLabel className={styles.label}>Nombres</FormLabel>
          <Input
            borderColor="black.100"
            type="text"
            className={styles.Entrada}
            placeholder="Escribe tus nombres aquí"
          />
        </div>
        <div>
          <FormLabel className={styles.label}>Apellidos</FormLabel>
          <Input
            borderColor="black.100"
            type="text"
            className={styles.Entrada}
            placeholder="Escribe tus apellidos aquí"
          />
        </div>
        <div className={styles.Boton}>
          <Button variant="primary">Guardar Cambios</Button>
        </div>
      </div>
    </div>
  )
}
