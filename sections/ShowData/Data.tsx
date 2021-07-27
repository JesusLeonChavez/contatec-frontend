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
import { useContext, useState } from "react"
import { patch, setAuth } from "../../utils/http"
import { DataContext } from "../../store/GlobalState"
import showToast from "../../components/Toast"

export default function Show() {
  const { state } = useContext(DataContext)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { auth } = state
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
  const handleSubmit = async e => {
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
      setAuth(auth!.access_token)
      const res = await patch(`/api/user/update`, body)
      if (res.data?.message === "Usuario a sido actualizado") {
        showToast(
          "Exito en la edición",
          "Se editó correctamente la información",
          "success"
        )
      } else {
        showToast(
          "Error en la edición",
          "Problemas al editar información",
          "error"
        )
      }
      console.log("res-pass:", res)
      setIsPosting(false)
      reset()
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
              autoComplete="off"
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
              autoComplete="off"
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
          <Button
            variant="primary"
            w="3xs"
            type="submit"
            isLoading={isPosting}
            className="buttonDisabledPrimary"
          >
            Guardar Cambios
          </Button>
        </Box>
      </form>
    </div>
  )
}
