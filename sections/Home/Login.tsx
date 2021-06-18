import {
  Text,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Button
} from "@chakra-ui/react"

import ModalCustom from "../../components/ModalCustom"

import { post } from "../../utils/http"

type PropsRegister = {
  variant: string

  width: string

  showModalButtonText: string

  isLoading?: boolean
}

export default function Login({
  variant,
  width,
  showModalButtonText,
  isLoading
}: PropsRegister) {
  const handleSubmit = async e => {
    e.preventDefault()

    const body = {
      us_correo: "sasisromero10@gmail.com",
      password: "123456"
    }

    console.log("body: ", body)

    const respLogin = await post("/api/user/login", body)
    // TODO: si el logeo fue exitoso en estado AUTH colocar isLogged true
    // TODO: Implementar un efecto dentro del provider que sea dependiene del isLogged y de los dispatch que se haga para que se aplique el efecto de verificar que este logeado

    console.log("resp: ", respLogin)
  }

  return (
    <ModalCustom
      variant={variant}
      width={width}
      showModalButtonText={showModalButtonText}
    >
      <ModalHeader>
        <Text align="center">Login</Text>
      </ModalHeader>

      <ModalBody>
        <form onSubmit={handleSubmit}>
          <FormControl mb="6" isRequired>
            <FormLabel>Correo electrónico</FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <FormControl mb="6" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <Input placeholder="First name" />
          </FormControl>
          <Button
            width="full"
            variant="secondary"
            mb={6}
            type="submit"
            isLoading={isLoading}
          >
            Inicia sesión
          </Button>
        </form>
      </ModalBody>
    </ModalCustom>
  )
}
