// import { useState } from "react"
import {
  Text,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  FormErrorMessage,
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
import { useForm } from "./hooks/useForm"
import { useErrorRegister } from "./hooks/useError"
import { validRegister } from "./utils/valid"
import { useState } from "react"

type PropsRegister = {
  variant: string
  width: string
  showModalButtonText: string
  isLoading?: boolean
}

export default function Register({
  variant,
  width,
  showModalButtonText
}: PropsRegister) {
  const [values, handleInputChange, reset] = useForm({
    name: "",
    lastName: "",
    email: "",
    password: ""
  })
  const { name, lastName, email, password } = values

  const [errors, setErrors, resetErrors] = useErrorRegister({
    name: "",
    lastName: "",
    email: "",
    password: ""
  })

  const [isPosting, setIsPosting] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validRegister(values)
    setErrors(errorsForm)
    if (isValid) {
      console.log("enviando")
      setIsPosting(true)
      const resp = await post("/api/user/register", {
        us_correo: values.email,
        us_nombre: values.name,
        us_apellido: values.lastName,
        password: values.password
      })
      setIsPosting(false)
      console.log("resp: ", resp)
    }
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
          Registro
        </Text>
      </ModalHeader>

      <ModalBody color="primary">
        <form onSubmit={handleSubmit}>
          <FormControl mb="6" id="first-name" isInvalid={!!errors.name}>
            <FormLabel>Nombres</FormLabel>
            <Input
              type="text"
              placeholder="P. ej. Liliana Alexandra"
              name="name"
              onChange={handleInputChange}
              value={name}
            />
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl mb="6" isInvalid={!!errors.lastName}>
            <FormLabel>Apellidos</FormLabel>

            <Input
              type="text"
              placeholder="P. ej. Solar Rojas" // eslint-disable-next-line camelcase
              name="lastName"
              onChange={handleInputChange}
              value={lastName}
            />
            <FormErrorMessage>{errors.lastName}</FormErrorMessage>
          </FormControl>

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
            <FormHelperText>Debe tener como minimo 7 caracteres</FormHelperText>
            <FormErrorMessage>{errors.password}</FormErrorMessage>
          </FormControl>

          <FormControl mb="6">
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
            isLoading={isPosting}
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
                Registrate con Facebook
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
