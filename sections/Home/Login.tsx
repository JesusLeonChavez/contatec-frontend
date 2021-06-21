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
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
import ZIcon from "../../components/Icon/ZIcon"
import GoogleLogin from "react-google-login"
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
        <Text align="center" color="primary">
          Login
        </Text>
      </ModalHeader>

      <ModalBody color="primary">
        <form onSubmit={handleSubmit}>
          <FormControl mb="6" isRequired>
            <FormLabel>Correo electrónico</FormLabel>
            <Input placeholder="P. ej. lilianasolar@gmail.com" />
          </FormControl>
          <FormControl mb="6" isRequired>
            <FormLabel>Contraseña</FormLabel>
            <Input placeholder="P. ej. lilso21" />
          </FormControl>
          <Button
            width="full"
            variant="primary"
            my={2}
            type="submit"
            isLoading={isLoading}
          >
            Inicia sesión
          </Button>
          <Text fontSize="xs" color="primary" align="center">
            O
          </Text>
          <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            // onClick={() => {}}
            // callback={() => {}}
            render={renderProps => (
              <Button
                leftIcon={<ZIcon name="facebookv2" />}
                isFullWidth
                my={2}
                variant="facebook"
                onClick={renderProps.onClick}
              >
                Inicia sesión con Facebook
              </Button>
            )}
          />
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            render={renderProps => (
              <Button
                leftIcon={<ZIcon name="google" />}
                isFullWidth
                my={2}
                variant="google"
                onClick={renderProps.onClick}
              >
                Inicia sesión con Google
              </Button>
            )}
            // buttonText="Login"
            // onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            // cookiePolicy={'single_host_origin'}
          />
        </form>
      </ModalBody>
    </ModalCustom>
  )
}
