// import { useRouter } from "next/router"

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
  Button,
  useDisclosure,
  Textarea,
  Box,
  Flex,
  Avatar
} from "@chakra-ui/react"

import { useForm } from "../../../../utils/hooks/useForm"
import { useError } from "../../../../utils/hooks/useError"
import { validRegister } from "./utils/valid"

// import { post } from "../../../../utils/http"

// import showToast from "../../../../components/Toast"

type PropsRegister = {
  variant: string
  width: string
  showModalButtonText: string
}

// TODO: manejar error de token cuando se vuelve a dar click en activar cuenta

export default function ContactWorkerModal({
  variant,
  width,
  showModalButtonText
}: PropsRegister) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [description, setDescription] = useState("")

  // const router = useRouter()

  const [values, handleInputChange, reset] = useForm({
    issue: ""
  })

  const { issue } = values

  const [errors, setErrors, resetErrors] = useError({
    issue: "",
    description: ""
  })

  const handleTextArea = e => {
    const inputValue = e.target.value

    setDescription(inputValue)
  }

  const [isPosting, setIsPosting] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    // TODO: cambiar valid register
    const { errors: errorsForm, isValid } = validRegister(values)
    setErrors(errorsForm)

    if (isValid) {
      setIsPosting(true)

      // const resp = await post("/api/user/register", {
      //   us_correo: values.date,
      //   us_nombre: values?.name,
      //   us_apellido: values?.budget,
      //   descripcion: values.descripcion
      // })

      setIsPosting(false)

      // if (resp.data.response?.error) {
      //   showToast("Error al registrarse", resp.data.response?.error, "error")
      // } else {
      //   router.push("/active-message")
      // }
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

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Text align="center" color="primary" py="2" fontSize="2xl">
              Contactar
            </Text>

            <Text
              align="center"
              color="gray"
              fontSize="md"
              py="2"
              fontWeight="light"
            >
              Horal local: 11:30
            </Text>
            <Flex direction="column" align="center" justify="center">
              <Avatar
                size="2xl"
                name="Oshigaki Kisame"
                src="https://bit.ly/broken-link"
                mx="1"
              />
              <Text color="gray" fontSize="lg" fontWeight="light" pt="2">
                Liliana Villanueva
              </Text>
            </Flex>
          </ModalHeader>

          <ModalBody color="primary" px="10">
            <form onSubmit={handleSubmit}>
              <FormControl mb="6" id="first-name" isInvalid={!!errors.issue}>
                <FormLabel>Asunto</FormLabel>

                <Input
                  type="text"
                  placeholder="Escribe nombre aquí"
                  name="issue"
                  onChange={handleInputChange}
                  value={issue}
                />

                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl mb="2" isInvalid={!!errors.descripcion}>
                <FormLabel>Mensaje</FormLabel>

                <Textarea
                  placeholder="Escribe un resumen del proyecto aquí"
                  onChange={handleTextArea}
                  value={description}
                  h="100"
                  maxLength={100}
                  resizable="false"
                />

                <Box
                  d="flex"
                  justifyContent="flex-end"
                  color="gray"
                  fontSize="sm"
                  pt="2"
                >
                  <span>{description.length}/100</span>
                </Box>

                <FormErrorMessage>{errors.description}</FormErrorMessage>
              </FormControl>

              <Button
                width="full"
                variant="primary"
                my={2}
                type="submit"
                isLoading={isPosting}
                className="buttonDisabledPrimary"
              >
                Enviar mensaje
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
