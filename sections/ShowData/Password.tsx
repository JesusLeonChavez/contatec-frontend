import styles from "../../styles/sections/Show.module.css"
import { FormLabel, Input, Button, Text, FormControl } from "@chakra-ui/react"

export default function Show() {
  return (
    <div>
      <Text color="primary" className={styles.labelPrincipal}>
        Contraseña
      </Text>
      <p color="primary" className={styles.labelsub}>
        Puedes cambiar tu contraseña cuantas veces lo necesites. Te recomendamos
        utilizar numeros y letras.
      </p>
      <div className={styles.Input}>
        <FormControl>
          <FormLabel className={styles.label}>Contraseña actual</FormLabel>
          <Input
            borderColor="black.100"
            type={"password"}
            placeholder="Ingrese contraseña actual"
            className={styles.Input}
          />
        </FormControl>
        <FormControl>
          <FormLabel className={styles.label}>Nueva contraseña</FormLabel>
          <Input
            borderColor="black.100"
            type={"password"}
            placeholder="Ingrese contraseña nueva"
            className={styles.Input}
          />
        </FormControl>
        <div className={styles.Button}>
          <Button variant="primary">Guardar Cambios</Button>
        </div>
      </div>
    </div>
  )
}
