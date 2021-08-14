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

export default function ModalNewQuote({
  variant,
  width,
  height,
  showModalButtonText
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()

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
            <FormControl mb="2" id="first-name">
              <FormLabel color="letter" fontWeight="light" fontSize="sm">
                Servicio
              </FormLabel>

              <Input
                fontSize="sm"
                type="text"
                placeholder="Seleccionar servicio"
                name="name"
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
                name="name"
              />
            </FormControl>
            <Grid templateColumns="repeat(2,1fr)" gap="6">
              <FormControl mb="2">
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Presupuesto
                </FormLabel>
                <Input fontSize="sm" type="text" placeholder="s/" name="name" />
              </FormControl>
              <FormControl mb="2">
                <FormLabel color="letter" fontWeight="light" fontSize="sm">
                  Fecha limite del proyecto
                </FormLabel>
                <Input
                  fontSize="sm"
                  type="text"
                  placeholder="fecha"
                  name="name"
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
                name="description"
                h="100"
                maxLength={100}
                resizable="false"
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
