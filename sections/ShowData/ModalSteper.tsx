import {
  Button,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  FormControl,
  FormLabel,
  Grid,
  ModalFooter,
  Input,
  FormErrorMessage,
  Textarea
} from "@chakra-ui/react"
import { useState } from "react"
import FileUpload from "../../components/FileUpload/FileUpload"
import SelectField from "../../components/SelectField"

import ZIcon from "../../components/Icon/ZIcon"
import Steper from "../../components/Steper"

export default function ModalSteper({ service }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [step, setStep] = useState(1)
  const steps = [
    { value: 1, label: "Contacto" },
    { value: 2, label: "Servicio" }
  ]
  return (
    <Box>
      <ZIcon name="search" pointer size={20} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
        <ModalOverlay />

        <ModalContent h="600px">
          <ModalHeader py="10">
            <Text
              align="center"
              color="primary"
              fontSize="3xl"
              fontWeight="bold"
            >
              Marketing para redes
            </Text>
            <Text
              align="center"
              color="primary"
              fontSize="xl"
              fontWeight="light"
            >
              Marketea tu dia
            </Text>
          </ModalHeader>

          <ModalCloseButton _focus={{ outline: "none" }} />

          <ModalBody color="primary" px="20">
            <Steper steps={steps} currentStep={step} />
            <form>
              {step === 1 && (
                <>
                  <FormControl mb="2">
                    <FormLabel
                      color="primary"
                      fontWeight="normal"
                      fontSize="md"
                    >
                      Nombre del proyecto:
                    </FormLabel>
                    <Input
                      type="text"
                      readOnly
                      placeholder="P. ej. Liliana Espinoza"
                      name="name"
                      value={service ? service.msj_nombre_propuesta : "Ejemplo"}
                      size="sm"
                      color="letter"
                    />
                    <FormErrorMessage>Mensaje de error</FormErrorMessage>
                  </FormControl>
                  <Grid templateColumns="repeat(2,1fr)" gap="6">
                    <FormControl mb="2">
                      <FormLabel
                        color="primary"
                        fontWeight="normal"
                        fontSize="md"
                      >
                        Presupuesto:
                      </FormLabel>
                      <Input
                        type="text"
                        readOnly
                        placeholder="P. ej. S/. 2000"
                        name="name"
                        value={
                          service ? `S/ ${service.msj_precio_prop}` : "S/ 2000"
                        }
                        size="sm"
                        color="letter"
                      />
                      <FormErrorMessage>Mensaje de error</FormErrorMessage>
                    </FormControl>
                  </Grid>
                  <FormControl mb="2">
                    <FormLabel
                      color="primary"
                      fontWeight="normal"
                      fontSize="md"
                    >
                      Descripcion:
                    </FormLabel>
                    <Textarea
                      fontSize="sm"
                      placeholder="Escribe tu contenido breve aquí"
                      // onChange={handleInputChange}
                      name="brief_content"
                      value={service ? service.msj_descripcion_prop : "Ejemplo"}
                      h="100"
                      maxLength={100}
                      resize="none"
                      color="letter"
                    />
                  </FormControl>
                </>
              )}
              {step === 2 && (
                <>
                  <Grid templateColumns="repeat(2,1fr)" gap="6">
                    <FormControl mb="2">
                      <FormLabel
                        color="primary"
                        fontWeight="normal"
                        fontSize="md"
                      >
                        Cliente:
                      </FormLabel>
                      {/* Agregar cliente, hacer peticion a endpoint */}
                      <Input
                        type="text"
                        readOnly
                        placeholder="P. ej. Renata rojas"
                        name="name"
                        value={"Renata rojas"}
                        size="sm"
                        color="letter"
                      />
                      <FormErrorMessage>Mensaje de error</FormErrorMessage>
                    </FormControl>
                    <FormControl mb="2">
                      <FormLabel
                        color="primary"
                        fontWeight="normal"
                        fontSize="md"
                      >
                        Fecha de actualizacion:
                      </FormLabel>
                      <Input
                        type="text"
                        readOnly
                        placeholder="P. ej. 11-11-2012"
                        name="name"
                        value={service ? service.trb_updatedAt : "11/12/2020"}
                        size="sm"
                        color="letter"
                      />
                    </FormControl>
                  </Grid>
                </>
              )}
            </form>
          </ModalBody>

          <ModalFooter>
            {step !== 1 && (
              <Button
                bg="transparent"
                variant="light"
                fontSize="sm"
                width="100px"
                onClick={() => {
                  setStep(step - 1)
                }}
              >
                Volver
              </Button>
            )}
            {step !== steps.length && (
              <Button
                fontSize="sm"
                width="100px"
                variant="primary"
                type="submit"
                className="buttonDisabledPrimary"
                onClick={() => {
                  setStep(step + 1)
                }}
              >
                Siguiente
              </Button>
            )}
            {step === steps.length && (
              <Button
                fontSize="sm"
                width="100px"
                variant="primary"
                type="submit"
                className="buttonDisabledPrimary"
                onClick={onClose}
              >
                Salir
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
