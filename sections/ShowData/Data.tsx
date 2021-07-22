import styles from "../../styles/sections/Show.module.css"
import {
  FormLabel,
  Input,
  Button,
  Text,
  FormControl,
  Box
} from "@chakra-ui/react"
// import Category from "../../components/SelectCategory"
import Datepicker from "../../components/SelectDatepicker"

export default function Show() {
  return (
    <div>
      {/* <Category
        width="140px"
        options={["Jupiter", "Marte", "Saturno", "Urano", "Tierra"]}
      /> */}
      <Datepicker></Datepicker>
      <Text color="primary" className={styles.mainLabel}>
        Datos personales
      </Text>
      <Text color="primary" align="start" fontWeight="medium" pb="2">
        Puedes cambiar los datos de tu perfil cuantas veces lo consideres
        necesario.
      </Text>
      <Box className={styles.divContainerForm}>
        <FormControl>
          <FormLabel fontWeight="medium" color="primary">
            Nombres
          </FormLabel>
          <Input
            type="text"
            my="3"
            placeholder="Escribe tus nombres aquí"
            _active={{ borderColor: "primary" }}
            _focus={{ borderColor: "primary" }}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontWeight="medium" color="primary">
            Apellidos
          </FormLabel>
          <Input
            type="text"
            my="3"
            placeholder="Escribe tus apellidos aquí"
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
