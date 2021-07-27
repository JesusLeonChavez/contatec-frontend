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
import { useContext, useState } from "react"
import { validNewPassword } from "./utils/valid"
import { patch, setAuth } from "../../utils/http"
import showToast from "../../components/Toast"
import { DataContext } from "../../store/GlobalState"

export default function Show() {
  const { state } = useContext(DataContext)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { auth } = state
  const [values, handleInputChange, reset] = useForm({
    password: "",
    password2: ""
  })
  const { password, password2 } = values
  const [errors, setErrors, resetErrors] = useError({
    password: "",
    password2: ""
  })
  const [isPosting, setIsPosting] = useState(false)
  const handleSubmit = async e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validNewPassword(values)
    setErrors(errorsForm)
    if (isValid) {
      resetErrors()
      setIsPosting(true)
      const body = {
        password: password
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
      setIsPosting(false)
      reset()
    }
  }
  return (
    <div>
      <Text color="primary" className={styles.mainLabel}>
        Contraseña
      </Text>
      <Text color="primary" align="start" fontWeight="medium" pb="2">
        Puedes cambiar tu contraseña cuantas veces lo necesites. Te recomendamos
        utilizar numeros y letras.
      </Text>
      <form onSubmit={handleSubmit}>
        <Box className={styles.divContainerForm}>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel fontWeight="medium" color="primary">
              Nueva contraseña
            </FormLabel>
            <Input
              autoComplete="off"
              type="password"
              my="3"
              placeholder="Escribe tu contraseña actual aquí"
              _active={{ borderColor: "primary" }}
              _focus={{ borderColor: "primary" }}
              onChange={handleInputChange}
              name="password"
              value={password}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password2}>
            <FormLabel fontWeight="medium" color="primary">
              Confirmar nueva contraseña
            </FormLabel>
            <Input
              autoComplete="off"
              type="password"
              my="3"
              placeholder="Escribe tu contraseña nueva aquí"
              _active={{ borderColor: "primary" }}
              _focus={{ borderColor: "primary" }}
              onChange={handleInputChange}
              name="password2"
              value={password2}
            />
            <FormErrorMessage>{errors.password2}</FormErrorMessage>
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
