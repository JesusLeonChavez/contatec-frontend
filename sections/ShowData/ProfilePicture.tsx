import styles from "../../styles/sections/Show.module.css"
import {
  Flex,
  Avatar,
  Text,
  Circle,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormErrorMessage,
  useDisclosure
} from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"
import FileUpload from "../../components/FileUpload/FileUpload"
import { useEffect, useState } from "react"
import showToast from "../../components/Toast"
import { useError } from "../../utils/hooks/useError"
import { validImage } from "./utils/valid"
import { imageUpload } from "../../utils/imageUpload"
import { patch } from "../../utils/http"
interface ImageProps {
  // eslint-disable-next-line camelcase
  public_id: string
  url: string
}

export default function ProfilePicture({ auth }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [imagesFile, setImagesFile] = useState<any>([])
  const [errors, setErrors, resetErrors] = useError({
    imagesFile: ""
  })
  const [isPosting, setIsPosting] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const { errors: errorsForm, isValid } = validImage(imagesFile)
    setErrors(errorsForm)
    if (isValid) {
      // Uploading Images to Cloudinary
      let media: ImageProps[] = []
      setIsPosting(true)
      resetErrors()
      const imgNewURL = imagesFile.filter(img => img.size)
      const imgOldURL = imagesFile.filter(img => !img.size)
      // parse imgOld: luego remover
      const imgOldUrlParse = imgOldURL.map(img => ({
        public_id: "publicId123",
        url: img
      }))
      if (imgNewURL.length > 0) media = await imageUpload(imgNewURL)
      const imagesPost = [...imgOldUrlParse, ...media]
      const body = {
        avatar: imagesPost[0].url
      }
      const res = await patch(`/api/user/update`, body)
      if (res.data?.message === "Usuario a sido actualizado") {
        showToast(
          "Exito en la edición",
          "Se editó correctamente la información",
          "success"
        )
      } else {
        showToast(
          "Error en la edición",
          "Problemas al editar información",
          "error"
        )
      }
      console.log("res-edit: ", res)
      setIsPosting(false)
    }
  }

  function handleDrop(files) {
    if (imagesFile.length >= 1) {
      showToast(
        "Error al cargar imagen",
        "Número de elementos maximo: 1",
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

  useEffect(() => {
    resetErrors()
    setImagesFile([])
  }, [isOpen])
  return (
    <div
      className={styles.containerWithBackground}
      style={{ position: "relative" }}
    >
      <div className="generalWrapper" style={{ height: "300px" }}>
        <Flex align="flex-end" w="100%" h="100%">
          <Flex align="center" position="absolute" top="200px">
            <Avatar
              size="2xl"
              name={`${auth.user?.us_nombre} ${auth.user?.us_apellido}`}
              src={auth.user?.avatar}
              mx="1"
              position="relative"
            >
              <Circle
                pos="absolute"
                w="45px"
                h="45px"
                bg="circleicons"
                left="100px"
                top="80px"
                cursor="pointer"
                onClick={onOpen}
              >
                <ZIcon name="pencil" color="primary" />
              </Circle>
            </Avatar>
          </Flex>
          <Text
            color="primary"
            ml="40"
            py="2"
            className="bold500"
            fontSize="35px"
          >
            {`${auth.user?.us_nombre} ${auth.user?.us_apellido}`}
          </Text>
        </Flex>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center" py="6">
            Actualizar imagen
          </ModalHeader>
          <ModalCloseButton _focus={{ boxShadow: "none" }} />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl mb="2" isInvalid={!!errors.imagesFile}>
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
              <Button
                variant="primary"
                isFullWidth
                my="6"
                type="submit"
                isLoading={isPosting}
                className="buttonDisabledPrimary"
              >
                Guardar
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}
