import {
  Text,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button
} from "@chakra-ui/react"

import ModalCustom from "../../components/ModalCustom"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
import ZIcon from "../../components/Icon/ZIcon"
import GoogleLogin from "react-google-login"
import { useForm } from "./hooks/useForm"
import { useErrorLogin } from "./hooks/useError"
import { validLogin } from "./utils/valid"
// import { post } from "../../utils/http"

type PropsRegister = {
  variant: string

  width: string

  showModalButtonText: string

  isLoading?: boolean
}

export default function Login({
  variant,
  width,
  showModalButtonText
}: PropsRegister) {
  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: ""
  })
  const { email, password } = values

  const [errors, setErrors, resetErrors] = useErrorLogin({
    name: "",
    lastName: "",
    email: "",
    password: ""
  })
  const handleSubmit = async e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validLogin(values)
    setErrors(errorsForm)
    if (isValid) {
      console.log("enviando")
      // setIsPosting(true)
      // const resp = await post("/api/user/register", {
      //   us_correo: values.email,
      //   us_nombre: values?.name,
      //   us_apellido: values?.lastName,
      //   password: values.password
      // })
      // setIsPosting(false)
      // console.log("resp: ", resp)
    }
    const body = {
      us_correo: "sasisromero10@gmail.com",
      password: "123456"
    }

    console.log("body: ", body)

    // const respLogin = await post("/api/user/login", body)
    // TODO: si el logeo fue exitoso en estado AUTH colocar isLogged true
    // TODO: Implementar un efecto dentro del provider que sea dependiene del isLogged y de los dispatch que se haga para que se aplique el efecto de verificar que este logeado

    // console.log("resp: ", respLogin)
  }

  return (
    <ModalCustom
      variant={variant}
      width={width}
      showModalButtonText={showModalButtonText}
      type="register"
      reset={reset}
      resetError={resetErrors}
    >
      <ModalHeader>
        <Text align="center" color="primary">
          Login
        </Text>
      </ModalHeader>

      <ModalBody color="primary">
        <form onSubmit={handleSubmit}>
          <FormControl mb="6" isInvalid={!!errors.email}>
            <FormLabel>Correo electrónico</FormLabel>
            <Input
              type="email"
              placeholder="P. ej. lilianasolar@gmail.com"
              name="email"
              onChange={handleInputChange}
              value={email}
            />
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl mb="6" isInvalid={!!errors.password}>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              placeholder="P. ej. lilso21"
              name="password"
              onChange={handleInputChange}
              value={password}
            />
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>
          <Button width="full" variant="primary" my={2} type="submit">
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
