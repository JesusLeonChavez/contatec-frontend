import {
  Button,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Grid,
  Textarea,
  NumberInput,
  NumberInputField
} from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import SelectField, { Option } from "../../components/SelectField"
import { DataContext } from "../../store/GlobalState"
import { useForm } from "../../utils/hooks/useForm"
import { toCapitalFirstLetter } from "../../utils/toCapital"

export default function ModalNewQuote({
  variant,
  width,
  height,
  showModalButtonText,
  currentChat
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { state } = useContext(DataContext)
  const { socket, auth, posts } = state
  const [values, handleInputChange, reset] = useForm({
    servicio: "",
    nombre: "",
    presupuesto: "",
    fechaLimite: "",
    descripcion: "",
    price: ""
  })
  const [category, setCategory] = useState(null)
  const { nombre, descripcion, servicio, presupuesto, fechaLimite, price } =
    values
  function handleChangeSelect(option) {
    setCategory(option)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const dataEmit = { ...values, categoryId: category.value }
    socket.emit("messageProposal", {
      to: currentChat!.idAmiwi,
      from: auth.user.id,
      data: dataEmit
    })
    reset()
  }

  useEffect(() => {
    if (!isOpen) {
      reset()
      setCategory(null)
    }
  }, [isOpen])
  return (
    <Box>
      <Button variant={variant} width={width} height={height} onClick={onOpen}>
        <Text>{showModalButtonText}</Text>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Text align="center" color="primary" py="2" fontSize="xl">
              Cotizar servicio
            </Text>
          </ModalHeader>

          <ModalBody color="primary" px="10">
            <form onSubmit={handleSubmit}>
              <FormControl mb="2" id="first-name">
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Servicio
                </FormLabel>

                <Input
                  fontSize="sm"
                  type="text"
                  placeholder="Seleccionar servicio"
                  name="servicio"
                  onChange={handleInputChange}
                  value={toCapitalFirstLetter(servicio)}
                />
              </FormControl>
              <FormControl mb="2" id="first-name">
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Nombre del proyecto
                </FormLabel>

                <Input
                  fontSize="sm"
                  type="text"
                  placeholder="Escribe nombre del proyecto aquí"
                  name="nombre"
                  onChange={handleInputChange}
                  value={toCapitalFirstLetter(nombre)}
                />
              </FormControl>
              <Grid templateColumns="repeat(2,1fr)" gap="6">
                <FormControl mb="2">
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
                    // errorHelper={!!errors.category}
                  >
                    {posts.map((p, idx) => (
                      <Option key={idx} value={p.id}>
                        {p.pst_nombre}
                      </Option>
                    ))}
                  </SelectField>
                </FormControl>
                <FormControl mb="2">
                  <FormLabel color="letter" fontWeight="light" fontSize="sm">
                    Fecha limite del proyecto
                  </FormLabel>
                  <Input
                    fontSize="sm"
                    type="text"
                    placeholder="fecha"
                    name="fechaLimite"
                    onChange={handleInputChange}
                    value={toCapitalFirstLetter(fechaLimite)}
                  />
                </FormControl>
              </Grid>

              <FormControl mb="2">
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Descripción
                </FormLabel>

                <Textarea
                  fontSize="sm"
                  placeholder="Escribe tu contenido detallado aquí"
                  h="100"
                  maxLength={100}
                  resize="none"
                  name="descripcion"
                  onChange={handleInputChange}
                  value={toCapitalFirstLetter(descripcion)}
                />
              </FormControl>
              <FormControl mb="2" id="first-name">
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Presupuesto
                </FormLabel>
                <NumberInput min={0} defaultValue={price}>
                  <NumberInputField
                    fontSize="sm"
                    placeholder="S/."
                    name="presupuesto"
                    onChange={handleInputChange}
                    value={presupuesto}
                  />
                </NumberInput>

                {/* <Input
                  fontSize="sm"
                  type="text"
                  placeholder="s/"
                  name="presupuesto"
                  onChange={handleInputChange}
                  value={toCapitalFirstLetter(presupuesto)}
                /> */}
              </FormControl>

              <Button
                fontSize="sm"
                width="full"
                variant="primary"
                type="submit"
                className="buttonDisabledPrimary"
                my="4"
              >
                Enviar cotización
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
