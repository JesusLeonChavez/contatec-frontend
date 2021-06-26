import styles from "../../styles/sections/Show.module.css"
import { FormLabel, Input, Button, Text } from "@chakra-ui/react"

export default function Show() {
  return (
    <div>
      <Text className={styles.labelPrincipal}>Contraseña</Text>
      <p className={styles.labelsub}>
        Puedes cambiar tu contraseña cuantas veces lo necesites. Te recomendamos
        utilizar numeros y letras.
      </p>
      <div className={styles.Entrada}>
        <div>
          <FormLabel className={styles.label}>Contraseña actual</FormLabel>
          <Input
            borderColor="black.100"
            type={"password"}
            placeholder="Ingrese contraseña actual"
            className={styles.Entrada}
          />
        </div>
        <div>
          <FormLabel className={styles.label}>Nueva contraseña</FormLabel>
          <Input
            borderColor="black.100"
            type={"password"}
            placeholder="Ingrese contraseña nueva"
            className={styles.Entrada}
          />
        </div>
        <div className={styles.Boton}>
          <Button variant="primary">Guardar Cambios</Button>
        </div>
      </div>
    </div>
  )
}
