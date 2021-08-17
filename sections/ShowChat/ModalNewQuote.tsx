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
  Textarea
} from "@chakra-ui/react"
import { useContext } from "react"
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
  const { socket, auth } = state
  const [values, handleInputChange, reset] = useForm({
    servicio: "",
    nombre: "",
    presupuesto: "",
    fechaLimite: "",
    descripcion: ""
  })
  const { nombre, descripcion, servicio, presupuesto, fechaLimite } = values
  const handleSubmit = (e: any) => {
    e.preventDefault()
    socket.emit("messageProposal", {
      to: currentChat!.idAmiwi,
      from: auth.user.id,
      data: values
    })
    reset()
  }
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
                    Presupuesto
                  </FormLabel>
                  <Input
                    fontSize="sm"
                    type="text"
                    placeholder="s/"
                    name="presupuesto"
                    onChange={handleInputChange}
                    value={toCapitalFirstLetter(presupuesto)}
                  />
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
                  resizable="false"
                  name="descripcion"
                  onChange={handleInputChange}
                  value={toCapitalFirstLetter(descripcion)}
                />
              </FormControl>

              <Button
                fontSize="sm"
                width="full"
                variant="primary"
                type="submit"
                className="buttonDisabledPrimary"
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
