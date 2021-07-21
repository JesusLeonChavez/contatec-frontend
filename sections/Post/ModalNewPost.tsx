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
  Grid,
  Button,
  useDisclosure,
  Textarea,
  Box,
  Select
} from "@chakra-ui/react"

import { useForm } from "../../utils/hooks/useForm"

import { useError } from "../../utils/hooks/useError"

import { validRegister } from "./utils/valid"
import FileUpload from "../../components/FileUpload/FileUpload"
import showToast from "../../components/Toast"
import { imageUpload } from "../../utils/imageUpload"

// import { post } from "../../../../utils/http"

// import showToast from "../../../../components/Toast"

type PropsRegister = {
  variant: string

  width: string

  showModalButtonText: string
}

interface ImageProps {
  // eslint-disable-next-line camelcase
  public_id: string
  url: string
}
// TODO: manejar error de token cuando se vuelve a dar click en activar cuenta

export default function ModalNewPost({
  variant,

  width,

  showModalButtonText
}: PropsRegister) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [description, setDescription] = useState("")

  // const router = useRouter()

  const [values, handleInputChange, reset] = useForm({
    name: "",

    budget: "",

    date: ""
  })

  const { name, budget, date } = values

  const [errors, setErrors, resetErrors] = useError({
    name: "",

    budget: "",

    date: "",

    description: ""
  })

  const handleTextArea = e => {
    const inputValue = e.target.value

    setDescription(inputValue)
  }

  const [isPosting, setIsPosting] = useState(false)

  const [imagesFile, setImagesFile] = useState<any>([])
  const handleSubmit = async e => {
    e.preventDefault()

    // TODO: cambiar valid register

    const { errors: errorsForm, isValid } = validRegister(values)

    setErrors(errorsForm)

    if (isValid) {
      setIsPosting(true)
      // -------------------------
      // const resp = await post("/api/user/register", {

      //   us_correo: values.date,

      //   us_nombre: values?.name,

      //   us_apellido: values?.budget,

      //   descripcion: values.descripcion

      // })
      // ----------------------------
      setIsPosting(false)
      // ----------------------------
      // if (resp.data.response?.error) {

      //   showToast("Error al registrarse", resp.data.response?.error, "error")

      // } else {

      //   router.push("/active-message")

      // }
      // ---------------------------------------------------------
      console.log(imagesFile)
      // let media: ImageProps[] = []
      // const imgNewURL = imagesFile.filter(img => !img.url)
      // const imgOldURL = imagesFile.filter(img => img.url)
      // if (imgNewURL.length > 0) media = await imageUpload(imgNewURL)
      // console.log([...imgOldURL, ...media])
      // ---------------------------------------------------------
    }
  }
  useEffect(() => {
    if (!isOpen) {
      // reset()
      setImagesFile([])
      // resetErrors()
    }
  }, [isOpen])

  function handleDrop(files) {
    if (imagesFile.length >= 5) {
      showToast(
        "Error al cargar imagen",
        "Numero de elementos maximo: 5",
        "error"
      )
      return
    }
    setImagesFile([...imagesFile, ...files])
  }

  function handleDelete(index) {
    // eslint-disable-next-line camelcase
    const images_file = imagesFile.filter((img, i) => i !== index)
    setImagesFile(images_file)
  }

  return (
    <>
      <Button variant={variant} w={width} onClick={onOpen}>
        {showModalButtonText}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Text align="center" color="primary" py="2" fontSize="xl">
              Nuevo servicio
            </Text>
          </ModalHeader>

          <ModalBody color="primary" px="10">
            <form onSubmit={handleSubmit}>
              <Text color="primary" fontSize="lg" fontWeight="medium">
                Encabezado
              </Text>
              <FormControl mb="2" id="first-name" isInvalid={!!errors.name}>
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Nombres del servicio
                </FormLabel>

                <Input
                  fontSize="sm"
                  type="text"
                  placeholder="Escribe nombre del servicio aquí"
                  name="name"
                  onChange={handleInputChange}
                  value={name}
                />

                <FormErrorMessage fontSize="sm">{errors.name}</FormErrorMessage>
              </FormControl>

              <Grid templateColumns="repeat(2,1fr)" gap="6">
                {/* <FormControl mb="6" isInvalid={!!errors.budget}>
                  <FormLabel>Presupuesto</FormLabel>

                  <Input
                    type="text"
                    placeholder="s/" // eslint-disable-next-line camelcase
                    name="budget"
                    onChange={handleInputChange}
                    value={budget}
                  />

                  <FormErrorMessage>{errors.budget}</FormErrorMessage>
                </FormControl> */}
                <FormControl mb="2" isInvalid={!!errors.budget}>
                  <FormLabel color="letter" fontWeight="light" fontSize="sm">
                    Categoría
                  </FormLabel>
                  <Select
                    fontSize="sm"
                    placeholder="Elige una categoría"
                    variant="outline"
                    name="state"
                    onChange={handleInputChange}
                    // value={state}
                  >
                    <option value="badstate" style={{ color: "var(--black)" }}>
                      Categoria 1
                    </option>
                    <option value="goodstate" style={{ color: "var(--black)" }}>
                      Categoria 2
                    </option>
                  </Select>
                  <FormErrorMessage fontSize="sm">
                    {errors.budget}
                  </FormErrorMessage>
                </FormControl>
                <FormControl mb="2" isInvalid={!!errors.budget}>
                  <FormLabel color="letter" fontWeight="light" fontSize="sm">
                    Archivos adjuntos
                  </FormLabel>
                  <FileUpload
                    fullWidth
                    files={imagesFile}
                    onDrop={handleDrop}
                    onDelete={handleDelete}
                    extensions={["jpg", "png"]}
                    remove
                  />
                  <FormErrorMessage fontSize="sm">
                    {errors.budget}
                  </FormErrorMessage>
                </FormControl>

                {/* <FormControl mb="6" isInvalid={!!errors.date}>
                  <FormLabel>Fecha límite del proyecto</FormLabel>

                  <Input
                    type="date"
                    placeholder="Seleccionar fecha"
                    name="date"
                    onChange={handleInputChange}
                    value={date}
                  />

                  <FormErrorMessage>{errors.date}</FormErrorMessage>
                </FormControl> */}
              </Grid>

              <FormControl isInvalid={!!errors.descripcion}>
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Contenido breve
                </FormLabel>

                <Textarea
                  fontSize="sm"
                  placeholder="Escribe tu contenido breve aquí"
                  onChange={handleInputChange}
                  value={description}
                  h="100"
                  maxLength={100}
                  resizable="false"
                />

                <Box
                  d="flex"
                  justifyContent="flex-end"
                  color="gray"
                  fontSize="xs"
                  pt="2"
                >
                  <span>{description.length}/100</span>
                </Box>

                <FormErrorMessage>{errors.description}</FormErrorMessage>
              </FormControl>
              <Text color="primary" fontSize="lg" fontWeight="medium">
                Descripción
              </Text>
              <FormControl mb="2" isInvalid={!!errors.descripcion}>
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Contenido detallado
                </FormLabel>

                <Textarea
                  fontSize="sm"
                  placeholder="Escribe tu contenido detallado aquí"
                  onChange={handleInputChange}
                  value={description}
                  h="100"
                  maxLength={100}
                  resizable="false"
                />

                <Box
                  d="flex"
                  justifyContent="flex-end"
                  color="gray"
                  fontSize="xs"
                  pt="2"
                >
                  <span>{description.length}/100</span>
                </Box>

                <FormErrorMessage fontSize="sm">
                  {errors.description}
                </FormErrorMessage>
              </FormControl>
              <FormControl mb="2" id="first-name" isInvalid={!!errors.name}>
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Ingresa lo que incluye el servicio
                </FormLabel>

                <Input
                  fontSize="sm"
                  type="text"
                  placeholder="Presiona ENTER para ingresar un dato"
                  name="name"
                  onChange={handleInputChange}
                  value={name}
                />

                <FormErrorMessage fontSize="sm">{errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl mb="2" id="first-name" isInvalid={!!errors.name}>
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Precio
                </FormLabel>

                <Input
                  fontSize="sm"
                  type="text"
                  placeholder="S/."
                  name="name"
                  onChange={handleInputChange}
                  value={name}
                />

                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <Button
                fontSize="sm"
                width="full"
                variant="primary"
                type="submit"
                isLoading={isPosting}
                className="buttonDisabledPrimary"
              >
                Publicar anuncio
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
