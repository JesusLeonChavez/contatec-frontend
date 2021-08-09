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
  Grid,
  ButtonGroup
} from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"

export default function ModalNewQuote({ variant, width, showModalButtonText }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Button variant={variant} width={width} onClick={onOpen}>
        <ZIcon name="dowload" pointer size={20} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Text align="center" color="primary" py="2" fontSize="25px">
              Comprobante 1057662
            </Text>
          </ModalHeader>

          <ModalBody color="primary" px="10">
            <Grid templateColumns="repeat(2,1fr)" gap="6">
              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="20px">
                  Nombre del servicio:
                </FormLabel>
                <Text>Marketing para redes</Text>
              </FormControl>

              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="20px">
                  Nombre del proyecto:
                </FormLabel>
                <Text>Marketea tu dia</Text>
              </FormControl>
            </Grid>

            <Grid templateColumns="repeat(2,1fr)" gap="6">
              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="20px">
                  Presupuesto:
                </FormLabel>
                <Text>s/ 2000</Text>
              </FormControl>

              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="20px">
                  Cuenta total:
                </FormLabel>
                <Text>s/ 2500</Text>
              </FormControl>
            </Grid>

            <Grid templateColumns="repeat(2,1fr)" gap="6">
              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="20px">
                  Fecha de inicio:
                </FormLabel>
                <Text>11-10-21</Text>
              </FormControl>

              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="20px">
                  Fecha final:
                </FormLabel>
                <Text>11-11-21</Text>
              </FormControl>
            </Grid>

            <Grid templateColumns="repeat(2,1fr)" gap="6">
              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="20px">
                  Cliente:
                </FormLabel>
                <Text>Varyana León</Text>
              </FormControl>

              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="20px">
                  Trabajador:
                </FormLabel>
                <Text>Leónidas León</Text>
              </FormControl>
            </Grid>

            <ButtonGroup mt="25" float="right" templateColumns="repeat(2,1fr)">
              <Button bg="transparent" fontSize="sm" width="100px">
                cancelar
              </Button>

              <Button
                fontSize="sm"
                width="100px"
                variant="primary"
                type="submit"
                className="buttonDisabledPrimary"
              >
                Descargar
              </Button>
            </ButtonGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
