/* eslint-disable camelcase */
// import { useRouter } from "next/router"
import "@pathofdev/react-tag-input/build/index.css"
import ReactTagInput from "@pathofdev/react-tag-input"
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
  NumberInput,
  NumberInputField
} from "@chakra-ui/react"

import { useForm } from "../../utils/hooks/useForm"
import { useError } from "../../utils/hooks/useError"
import { validPost } from "./utils/valid"
import FileUpload from "../../components/FileUpload/FileUpload"
import showToast from "../../components/Toast"
import SelectField, { Option } from "../../components/SelectField"
import { regexOnlyString } from "../../utils/regex"

// import { imageUpload } from "../../utils/imageUpload"
// import { post } from "../../../../utils/http"

type PropsRegister = {
  variant: string

  width: string

  showModalButtonText: string
}

// interface ImageProps {
//
//   public_id: string
//   url: string
// }
// TODO: manejar error de token cuando se vuelve a dar click en activar cuenta

export default function ModalNewPost({
  variant,

  width,

  showModalButtonText
}: PropsRegister) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const router = useRouter()
  const [values, handleInputChange, reset] = useForm({
    name: "",
    brief_content: "",
    description: "",
    price: ""
  })
  const [category, setCategory] = useState(null)
  const [tags, setTags] = useState<string[]>([])
  const [imagesFile, setImagesFile] = useState<any>([])
  const { name, brief_content, description, price } = values

  const [errors, setErrors, resetErrors] = useError({
    name: "",
    brief_content: "",
    description: "",
    price: "",
    category: "",
    imagesFile: "",
    tags: ""
  })

  const [isPosting, setIsPosting] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validPost(
      values,
      category,
      imagesFile,
      tags
    )

    setErrors(errorsForm)
    if (isValid) {
      setIsPosting(true)
      // ---------------------------------------------------------
      // Uploading Images to Cloudinary
      // let media: ImageProps[] = []
      // const imgNewURL = imagesFile.filter(img => !img.url)
      // const imgOldURL = imagesFile.filter(img => img.url)
      // if (imgNewURL.length > 0) media = await imageUpload(imgNewURL)
      // console.log([...imgOldURL, ...media])
      // -------------------------------------------------------------
      const body = {
        name: values.name,
        brief_content: values.brief_content,
        description: values.description,
        price: Number(values.price),
        category,
        imagesFile,
        tags
      }

      setTimeout(() => {
        console.log(body)
        setIsPosting(false)
      }, 5000)

      // const resp = await post("/api/user/post", body)
      // ----------------------------

      // ----------------------------
      // if (resp.data.response?.error) {
      //   showToast("Error al publicar el servicio", resp.data.response?.error, "error")
      // } else {
      //   router.push("/active-message")
      // }
      // ---------------------------------------------------------
    }
  }

  function handleChangeSelect(option) {
    setCategory(option)
  }

  function handleDelete(index) {
    const images_file = imagesFile.filter((img, i) => i !== index)
    setImagesFile(images_file)
  }

  function handleDrop(files) {
    if (imagesFile.length >= 5) {
      showToast(
        "Error al cargar imagen",
        "Número de elementos maximo: 5",
        "error"
      )
      return
    }
    setImagesFile([...imagesFile, ...files])
  }

  useEffect(() => {
    if (!isOpen) {
      reset()
      setImagesFile([])
      setCategory(null)
      setTags([])
      resetErrors()
    }
  }, [isOpen])

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
                  Nombre del servicio
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
                <FormControl mb="2" isInvalid={!!errors.category}>
                  <FormLabel color="letter" fontWeight="light" fontSize="sm">
                    Categoría
                  </FormLabel>
                  <SelectField
                    fullWidth
                    required
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    option={category}
                    placeholder="Seleccione una categoría "
                    onChange={handleChangeSelect}
                    errorHelper={!!errors.category}
                  >
                    {[
                      { label: "hola", value: 1 },
                      { label: "chau", value: 2 }
                    ].map((ubicacion, idx) => (
                      <Option key={idx} value={ubicacion.value}>
                        {ubicacion.label}
                      </Option>
                    ))}
                  </SelectField>
                  <FormErrorMessage fontSize="sm">
                    {errors.category}
                  </FormErrorMessage>
                </FormControl>
                <FormControl mb="2" isInvalid={!!errors.imagesFile}>
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
                    errorHelper={!!errors.imagesFile}
                  />
                  <FormErrorMessage fontSize="sm">
                    {errors.imagesFile}
                  </FormErrorMessage>
                </FormControl>
              </Grid>

              <FormControl isInvalid={!!errors.brief_content}>
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Contenido breve
                </FormLabel>

                <Textarea
                  fontSize="sm"
                  placeholder="Escribe tu contenido breve aquí"
                  onChange={handleInputChange}
                  name="brief_content"
                  value={brief_content}
                  h="100"
                  maxLength={100}
                  resizable="false"
                />

                <Box
                  d="flex"
                  justifyContent="space-between"
                  color="gray"
                  fontSize="xs"
                >
                  {!errors.brief_content && <Box w="3"></Box>}
                  <FormErrorMessage>{errors.brief_content}</FormErrorMessage>
                  <span style={{ paddingTop: "10px" }}>
                    {description.length}/100
                  </span>
                </Box>
              </FormControl>
              <Text color="primary" fontSize="lg" fontWeight="medium">
                Descripción
              </Text>
              <FormControl mb="2" isInvalid={!!errors.description}>
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Contenido detallado
                </FormLabel>

                <Textarea
                  fontSize="sm"
                  placeholder="Escribe tu contenido detallado aquí"
                  onChange={handleInputChange}
                  name="description"
                  value={description}
                  h="100"
                  maxLength={100}
                  resizable="false"
                />

                <Box
                  d="flex"
                  justifyContent="space-between"
                  color="gray"
                  fontSize="xs"
                >
                  {!errors.description && <Box w="3"></Box>}
                  <FormErrorMessage fontSize="sm">
                    {errors.description}
                  </FormErrorMessage>
                  <span style={{ paddingTop: "10px" }}>
                    {description.length}/100
                  </span>
                </Box>
              </FormControl>
              <FormControl mb="2" id="first-name" isInvalid={!!errors.tags}>
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Ingresa lo que incluye el servicio
                </FormLabel>
                <ReactTagInput
                  tags={tags}
                  onChange={newTags => setTags(newTags)}
                  placeholder="Presiona ENTER para ingresar un dato"
                  removeOnBackspace={true}
                  maxTags={8}
                  validator={value => {
                    const isString = regexOnlyString(value)
                    if (!isString) {
                      showToast("Tag inválido", "Ingrese solo texto", "error")
                    }
                    return isString
                  }}
                />

                <FormErrorMessage fontSize="sm">{errors.tags}</FormErrorMessage>
              </FormControl>
              <FormControl mb="2" id="first-name" isInvalid={!!errors.price}>
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Precio
                </FormLabel>

                {/* <Input
                  fontSize="sm"
                  type="number"
                  placeholder="S/."
                  name="price"
                  onChange={handleInputChange}
                  value={price}
                /> */}
                <NumberInput min={0}>
                  <NumberInputField
                    fontSize="sm"
                    placeholder="S/."
                    name="price"
                    onChange={handleInputChange}
                    value={price}
                  />
                </NumberInput>
                <FormErrorMessage>{errors.price}</FormErrorMessage>
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
