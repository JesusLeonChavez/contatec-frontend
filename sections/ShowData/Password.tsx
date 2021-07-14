import styles from "../../styles/sections/Show.module.css"
import {
  FormLabel,
  Input,
  Button,
  Text,
  FormControl,
  Box
} from "@chakra-ui/react"

export default function Show() {
  return (
    <div>
      <Text color="primary" className={styles.mainLabel}>
        Contraseña
      </Text>
      <Text color="primary" align="start" fontWeight="medium" pb="2">
        Puedes cambiar tu contraseña cuantas veces lo necesites. Te recomendamos
        utilizar numeros y letras.
      </Text>
      <Box className={styles.divContainerForm}>
        <FormControl>
          <FormLabel fontWeight="medium" color="primary">
            Contraseña actual
          </FormLabel>
          <Input
            type="password"
            my="3"
            placeholder="Escribe tu contraseña actual aquí"
            _active={{ borderColor: "primary" }}
            _focus={{ borderColor: "primary" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="medium" color="primary">
            Nueva contraseña
          </FormLabel>
          <Input
            type="password"
            my="3"
            placeholder="Escribe tu contraseña nueva aquí"
            _active={{ borderColor: "primary" }}
            _focus={{ borderColor: "primary" }}
          />
        </FormControl>
        <Button variant="primary" w="3xs">
          Guardar Cambios
        </Button>
      </Box>
    </div>
  )
}
