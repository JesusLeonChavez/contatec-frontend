import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import {
  Text,
  ModalHeader,
  ModalBody,
  Modal,
  ModalOverlay,
  ModalContent,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Checkbox,
  Button,
  useDisclosure,
  useToast
} from "@chakra-ui/react"
import { useForm } from "./hooks/useForm"
import { useErrorRegister } from "./hooks/useError"
import { validRegister } from "./utils/valid"
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
  showModalButtonText
}: PropsRegister) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const router = useRouter()
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

  const showToast = errMessage => {
    toast({
      title: "Error al registrarse.",
      description: `${errMessage}`,
      position: "top",
      status: "error",
      duration: 9000,
      isClosable: true
    })
  }
  const handleSubmit = async e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validRegister(values)
    setErrors(errorsForm)
    if (isValid) {
      setIsPosting(true)
      const resp = await post("/api/user/register", {
        us_correo: values.email,
        us_nombre: values?.name,
        us_apellido: values?.lastName,
        password: values.password
      })
      setIsPosting(false)

      if (resp.data.response?.error) {
        showToast(resp.data.response?.error)
      } else {
        router.push("/active-message")
      }
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
                <FormHelperText>
                  Debe tener como minimo 7 caracteres
                </FormHelperText>
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
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
