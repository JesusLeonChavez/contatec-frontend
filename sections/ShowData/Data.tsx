import styles from "../../styles/sections/Show.module.css"
import {
  FormLabel,
  Input,
  Button,
  Text,
  FormControl,
  FormErrorMessage,
  Box
} from "@chakra-ui/react"
import { useForm } from "../../utils/hooks/useForm"
import { useError } from "../../utils/hooks/useError"
import { validNameLastName } from "./utils/valid"
import { useState } from "react"

export default function Show() {
  const [values, handleInputChange, reset] = useForm({
    name: "",
    lastname: ""
  })
  const { name, lastname } = values
  const [errors, setErrors, resetErrors] = useError({
    name: "",
    lastname: ""
  })
  const [isPosting, setIsPosting] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validNameLastName(values)
    setErrors(errorsForm)
    if (isValid) {
      resetErrors()
      setIsPosting(true)
      const body = {
        us_nombre: name,
        us_apellido: lastname
      }
      console.log("body: ", body)
      setTimeout(() => {
        setIsPosting(false)
        reset()
      }, 2000)
    }
  }
  return (
    <div>
      <Text color="primary" className={styles.mainLabel}>
        Datos personales
      </Text>
      <Text color="primary" align="start" fontWeight="medium" pb="2">
        Puedes cambiar los datos de tu perfil cuantas veces lo consideres
        necesario.
      </Text>
      <form onSubmit={handleSubmit}>
        <Box className={styles.divContainerForm}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel fontWeight="medium" color="primary">
              Nombres
            </FormLabel>
            <Input
              type="text"
              my="3"
              name="name"
              placeholder="Escribe tus nombres aquí"
              _active={{ borderColor: "primary" }}
              _focus={{ borderColor: "primary" }}
              value={name}
              onChange={handleInputChange}
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.lastname}>
            <FormLabel fontWeight="medium" color="primary">
              Apellidos
            </FormLabel>
            <Input
              type="text"
              my="3"
              name="lastname"
              placeholder="Escribe tus apellidos aquí"
              _active={{ borderColor: "primary" }}
              _focus={{ borderColor: "primary" }}
              value={lastname}
              onChange={handleInputChange}
            />
            <FormErrorMessage>{errors.lastname}</FormErrorMessage>
          </FormControl>
          <Button variant="primary" w="3xs" type="submit" isLoading={isPosting}>
            Guardar Cambios
          </Button>
        </Box>
      </form>
    </div>
  )
}
