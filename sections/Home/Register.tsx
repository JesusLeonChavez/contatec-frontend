import {
  Text,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Checkbox,
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

export default function Register({
  variant,
  width,
  showModalButtonText,
  isLoading
}: PropsRegister) {
  const handleSubmit = async e => {
    e.preventDefault()
    const body = {
      us_correo: "sasisromero10@gmail.com",
      us_nombre: "Jhon",
      us_apellido: "Doe",
      password: "123456"
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line no-unused-vars
    const resp = await post("/api/user/register", body)
  }
  return (
    <ModalCustom
      variant={variant}
      width={width}
      showModalButtonText={showModalButtonText}
    >
      <ModalHeader>
        <Text align="center" color="primary">
          Registro
        </Text>
      </ModalHeader>

      <ModalBody color="primary">
        <form onSubmit={handleSubmit}>
          <FormControl id="first-name" isRequired mb="6">
            <FormLabel>Nombres</FormLabel>

            <Input placeholder="P. ej. Liliana Alexandra" />
          </FormControl>

          <FormControl mb="6" isRequired>
            <FormLabel>Apellidos</FormLabel>

            <Input placeholder="P. ej. Solar Rojas" />
          </FormControl>

          <FormControl mb="6" isRequired>
            <FormLabel>Correo electrónico</FormLabel>

            <Input placeholder="P. ej. lilianasolar@gmail.com" />
          </FormControl>

          <FormControl mb="6" isRequired>
            <FormLabel>Contraseña</FormLabel>

            <Input placeholder="P. ej. lilso21" />

            <FormHelperText>Debe tener como minimo 7 caracteres</FormHelperText>
          </FormControl>

          <FormControl mb="6" isRequired>
            <Checkbox colorScheme="purple" color="whiteAlpha.100">
              <Text fontSize="xs" color="primary">
                Acepto los
                <b> Términos, Condiciones y políticas de Contactec</b>
              </Text>
            </Checkbox>
          </FormControl>

          <Button
            width="full"
            variant="primary"
            my={2}
            type="submit"
            isLoading={isLoading}
          >
            Registrate
          </Button>
          <Text fontSize="xs" color="primary" align="center">
            O
          </Text>
          <FacebookLogin
            // appId="1088597931155576"
            // autoLoad={true}
            fields="name,email,picture"
            onClick={() => {}}
            callback={() => {}}
            render={renderProps => (
              <Button
                leftIcon={<ZIcon name="facebookv2" />}
                isFullWidth
                my={2}
                variant="facebook"
                onClick={renderProps.onClick}
              >
                Registrate con Facebook
              </Button>
            )}
          />
          <GoogleLogin
            // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            render={renderProps => (
              <Button
                leftIcon={<ZIcon name="google" />}
                isFullWidth
                my={2}
                variant="google"
                onClick={renderProps.onClick}
              >
                Registrate con Google
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
