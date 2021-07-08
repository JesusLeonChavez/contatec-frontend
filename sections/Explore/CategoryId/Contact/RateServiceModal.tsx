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
  Button,
  useDisclosure,
  Textarea,
  Box
} from "@chakra-ui/react"
import ReactStars from "react-rating-stars-component"
import { useError } from "../../../../utils/hooks/useError"

// import { validRegister } from "./utils/valid"
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

  const [errors /* setErrors */, , resetErrors] = useError({
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

    // const { errors: errorsForm, isValid } = validRegister(values)

    // setErrors(errorsForm)
    const isValid = false
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

  const ratingChanged = newRating => {
    console.log(newRating)
  }

  useEffect(() => {
    if (!isOpen) {
      // reset()

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
              Valorar servicio
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
          </ModalHeader>

          <ModalBody color="primary" px="10">
            <form onSubmit={handleSubmit}>
              <FormLabel>Puntuación</FormLabel>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={50}
                activeColor="#ffd700"
              />
              <FormControl mb="2" isInvalid={!!errors.descripcion}>
                <FormLabel>Comentario</FormLabel>

                <Textarea
                  placeholder="Escribe tu comentario aquí"
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
                Registrar valoración
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
