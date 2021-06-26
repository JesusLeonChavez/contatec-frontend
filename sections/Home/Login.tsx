import {
  Text,
  Modal,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  ModalContent,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useDisclosure,
  useToast
} from "@chakra-ui/react"
import { useEffect } from "react"
import Link from "next/link"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
import ZIcon from "../../components/Icon/ZIcon"
import GoogleLogin from "react-google-login"
import { useForm } from "./hooks/useForm"
import { useErrorLogin } from "./hooks/useError"
import { validLogin } from "./utils/valid"
import { post } from "../../utils/http"
// import { axios } from "axios"

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
  const { isOpen, onOpen, onClose } = useDisclosure()
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
  const toast = useToast()
  const showToast = errMessage => {
    toast({
      title: "Error al iniciar sesión.",
      description: `${errMessage}`,
      position: "top",
      status: "error",
      duration: 9000,
      isClosable: true
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validLogin(values)
    console.log(errorsForm)
    setErrors(errorsForm)
    if (isValid) {
      console.log("enviando")
      const res = await post("/api/user/login", {
        us_correo: values.email,
        password: values.password
      })
      // const res = await axios.post(
      //   "https://contatec.herokuapp.com/api/user/login",
      //   {
      //     us_correo: values.email,
      //     password: values.password
      //   },
      //   { withCredentials: true }
      // )
      // const accessToken = await axios.post(
      //   "https://contatec.herokuapp.com/api/user/refresh_token",
      //   null,
      //   { withCredentials: true }
      // )
      console.log("respLogin: ", res)
      if (res.data.status) {
        showToast(res.data.message)
      } else {
        const accessToken = await post("/api/user/refresh_token", {})
        console.log("accessToken: ", accessToken)
      }
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
    // const body = {
    //   us_correo: "sasisromero10@gmail.com",
    //   password: "123456"
    // }

    // console.log("body: ", body)

    // const respLogin = await post("/api/user/login", body)
    // TODO: si el logeo fue exitoso en estado AUTH colocar isLogged true
    // TODO: Implementar un efecto dentro del provider que sea dependiene del isLogged y de los dispatch que se haga para que se aplique el efecto de verificar que este logeado

    // console.log("resp: ", respLogin)

    // const headers = new Headers()
    // headers.append("Content-Type", "application/json")
    // headers.append("Accept", "application/json")
    // const res = await fetch("https://contatec.herokuapp.com/api/user/login", {
    //   headers: headers,
    //   method: "POST",
    //   body: JSON.stringify({
    //     us_correo: values.email,
    //     password: values.password
    //   }),
    //   credentials: "include"
    // })
    // console.log("respLogin: ", res)

    // const data = await res.json()
    // console.log("datapLogin: ", data)

    // const accessToken = await fetch(
    //   "https://contatec.herokuapp.com/api/user/refresh_token",
    //   {
    //     headers: headers,
    //     method: "POST",
    //     body: null,
    //     credentials: "include"
    //   }
    // )
    // const dataToken = await accessToken.json()
    // console.log("accessToken: ", dataToken)
  }

  const handleFacebook = async res => {
    const { accessToken, userID } = res
    try {
      const resp = await post("/api/user/facebook_login", {
        accessToken,
        userID
      })
      console.log("resFB: ", resp)
    } catch (err) {
      console.log("err: ", err)
    }
  }
  const handleGoogle = async res => {
    const { tokenId } = res
    try {
      const resp = await post("/api/user/google_login", { tokenId })
      console.log("resGoogle: ", resp)
    } catch (err) {
      console.log("err: ", err)
    }
  }

  useEffect(() => {
    if (!isOpen) {
      reset()
      resetErrors()
    }
  }, [isOpen])
  return (
    <>
      <Button variant={variant} w={width} onClick={onOpen}>
        {showModalButtonText}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
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
                appId="496057688285326"
                autoLoad={false}
                fields="name,email,picture"
                // onClick={() => {}}
                callback={res => {
                  handleFacebook(res)
                }}
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
                clientId="474899151330-hdavkur1j29cii1n65o2m23h682kem04.apps.googleusercontent.com"
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
                onSuccess={responseGoogleS => {
                  handleGoogle(responseGoogleS)
                }}
                onFailure={responseGoogleF =>
                  console.log("responseGoogleF: ", responseGoogleF)
                }
                cookiePolicy={"single_host_origin"}
              />
              <Text className="bold600" fontSize="lg" align="center" my="3">
                <Link href="/restablecer-contrasena">
                  <a>¿Olvido su contraseña?</a>
                </Link>
              </Text>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
