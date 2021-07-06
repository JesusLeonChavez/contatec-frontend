import styles from "../../styles/sections/Show.module.css"
import { FormLabel, Input, Button, Text, FormControl } from "@chakra-ui/react"

export default function Show() {
  return (
    <div>
      <Text color="primary" className={styles.labelPrincipal}>
        Datos personales
      </Text>
      <Text color="primary" align="start" fontWeight="medium">
        Puedes cambiar los datos de tu perfil cuantas veces lo consideres
        necesario.
      </Text>
      <div color="primary" className={styles.Input}>
        <FormControl>
          <FormLabel className={styles.label}>Nombres</FormLabel>
          <Input
            // borderColor="black.100"
            type="text"
            my="3"
            // className={styles.Input}
            placeholder="Escribe tus nombres aquí"
            _active={{ borderColor: "primary" }}
            _focus={{ borderColor: "primary" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel className={styles.label} color="primary">
            Apellidos
          </FormLabel>
          <Input
            type="text"
            my="3"
            // className={styles.Input}
            placeholder="Escribe tus apellidos aquí"
          />
        </FormControl>
        <div className={styles.Button}>
          <Button variant="primary">Guardar Cambios</Button>
        </div>
      </div>
    </div>
  )
}
