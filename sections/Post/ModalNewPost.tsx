/* istanbul ignore file */
/* eslint-disable camelcase */
import "@pathofdev/react-tag-input/build/index.css"
import ReactTagInput from "@pathofdev/react-tag-input"
import { useState, useEffect, useContext } from "react"
import ZIcon from "../../components/Icon"
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

import { imageUpload } from "../../utils/imageUpload"
import { patch, post, setAuth } from "../../utils/http"

import { DataContext } from "../../store/GlobalState"
import { toCapitalFirstLetter } from "../../utils/toCapital"
import { ImageProps, PropsModalPost } from "./types"

export default function ModalNewPost({
  variant,
  width,
  backgroundColor,
  showModalButtonText,
  icon = false,
  mypost
}: PropsModalPost) {
  let initialState
  if (mypost) {
    initialState = {
      values: {
        name: mypost.pst_nombre,
        brief_content: mypost.pst_descripcion_corta,
        description: mypost.pst_descripcion,
        price: mypost.pst_precioBase.toString()
      },
      category: {
        value: mypost.pstCategoriaId.id,
        label: mypost.pstCategoriaId.cat_nombre
      },
      imagesFiles: [
        mypost.pst_imagen_1,
        mypost.pst_imagen_2,
        mypost.pst_imagen_3,
        mypost.pst_imagen_4,
        mypost.pst_imagen_5
      ],
      tags: mypost.pst_descripcion_incluye.split(",")
    }
  } else {
    initialState = {
      values: {
        name: "",
        brief_content: "",
        description: "",
        price: ""
      },
      category: null,
      imagesFiles: [],
      tags: []
    }
  }
  const { state, dispatch } = useContext(DataContext)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { auth, categories } = state
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [values, handleInputChange, reset] = useForm(initialState.values)
  const [category, setCategory] = useState(initialState.category)
  const [tags, setTags] = useState<string[]>(initialState.tags)
  const [imagesFile, setImagesFile] = useState<any>(initialState.imagesFiles)
  const { name, brief_content, description, price } = values
  const [errors, setErrors, resetErrors] = useError({
    name: "",
    brief_content: "",
    description: "",
    price: "",
    category: null,
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
      if (mypost) {
        if (
          values.name === initialState.values.name &&
          values.brief_content === initialState.values.brief_content &&
          values.description === initialState.values.description &&
          values.price === initialState.values.price &&
          category.value === initialState.category.value &&
          JSON.stringify(tags) === JSON.stringify(initialState.tags) &&
          JSON.stringify(imagesFile) ===
            JSON.stringify(initialState.imagesFiles)
        ) {
          return showToast(
            "Cuidado",
            "No hizo modificaciones en los campos",
            "info"
          )
        }
      }
      setIsPosting(true)
      // ---------------------------------------------------------
      // Uploading Images to Cloudinary
      let media: ImageProps[] = []
      const imgNewURL = imagesFile.filter(img => img.size)
      const imgOldURL = imagesFile.filter(img => !img.size)
      // parse imgOld: luego remover
      const imgOldUrlParse = imgOldURL.map(img => ({
        public_id: "publicId123",
        url: img
      }))
      console.log("hasta aqui llega")
      if (imgNewURL.length > 0) media = await imageUpload(imgNewURL)
      const imagesPost = [...imgOldUrlParse, ...media]
      // -------------------------------------------------------------
      const body = {
        pst_imagen_1: imagesPost[0].url,
        pst_imagen_2: imagesPost[1].url,
        pst_imagen_3: imagesPost[2].url,
        pst_imagen_4: imagesPost[3].url,
        pst_imagen_5: imagesPost[4].url,
        pst_isActive: true,
        pst_descripcion: values.description.toLocaleLowerCase(),
        pst_descripcion_corta: values.brief_content.toLocaleLowerCase(),
        pst_nombre: values.name.toLocaleLowerCase(),
        pst_descripcion_incluye: tags,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        pst_categoria: category?.value,
        pst_precioBase: Number(values.price)
      }
      setAuth(auth!.access_token)
      let res
      if (mypost) {
        res = await patch(`/api/post/update/${mypost.id}`, body)
      } else {
        console.log("creando")
        res = await post("/api/post/create", body)
      }
      setIsPosting(false)
      if (res.data?.error) {
        return showToast(
          `Error al ${mypost ? "editar" : "publicar"} el servicio`,
          res.data?.message[0],
          "error"
        )
      } else {
        showToast(
          `${mypost ? "Edición" : "Creación"} exitosa`,
          `Se ${mypost ? "editó" : "creó"} correctamente el anuncio`,
          "success"
        )
        // TODO: hacer que la actualizacion de los post sea por disptach en auth
        if (mypost) {
          dispatch({ type: "EDIT_POST", payload: res.data.data })
        } else {
          dispatch({ type: "ADD_POST", payload: res.data.data })
        }
        setTimeout(() => {
          onClose()
        }, 1500)
      }

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
      if (!post) {
        setImagesFile([])
        setCategory(null)
        setTags([])
      } else {
        setImagesFile(initialState.imagesFiles)
        setCategory(initialState.category)
        setTags(initialState.tags)
      }
      resetErrors()
    }
  }, [isOpen])

  return (
    <>
      <Button
        variant={variant}
        width={width}
        backgroundColor={backgroundColor}
        onClick={onOpen}
      >
        {icon ? (
          <ZIcon name="pencil" color="primary" size={20} />
        ) : (
          <Text>{showModalButtonText}</Text>
        )}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Text align="center" color="primary" py="2" fontSize="xl">
              {mypost ? "Editar servicio" : "Nuevo Servicio"}
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
                  value={toCapitalFirstLetter(name)}
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
                    {categories.map((cat, idx) => (
                      <Option key={idx} value={cat.id}>
                        {cat.cat_nombre}
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
                  value={toCapitalFirstLetter(brief_content)}
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
                    {brief_content.length}/100
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
                  value={toCapitalFirstLetter(description)}
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
                <NumberInput min={0} defaultValue={price}>
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
                {mypost ? "Guardar anuncio" : "Publicar anuncio"}
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
