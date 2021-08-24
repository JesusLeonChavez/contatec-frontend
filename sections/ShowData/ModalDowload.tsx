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
  ModalFooter
} from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"
import { useReactToPrint } from "react-to-print"
import { useRef } from "react"
import PrintView from "./PrintView"
// import { toCapitalFirstLetter } from "../../utils/toCapital"
import { format } from "date-fns"
import { es } from "date-fns/locale"

const pageStyle = `
  @media print {
    .page-break {
      margin-top: 1rem;
    }
  }

  @media print {
    html, body {
      height: initial !important;
      overflow: initial !important;
      -webkit-print-color-adjust: exact;
    }

    table {
      thead, th{
        background: #F1F1F1;
      }
    }
  }
`

export default function ModalDowload({
  service,
  user,
  dataOtherUser,
  postData
}) {
  const componentRef = useRef<any>(null)
  function handleClosePrint() {
    console.log("Adios impresion")
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handlePrint = useReactToPrint({
    onAfterPrint: () => handleClosePrint(),
    content: () => componentRef.current,
    pageStyle: pageStyle
  })
  const boucher = {
    number: "13546"
  }

  return (
    <Box>
      <ZIcon name="dowload" pointer size={20} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Text
              align="center"
              color="primary"
              py="6"
              fontSize="3xl"
              fontWeight="bold"
            >
              Comprobante {service.trb_ID}
            </Text>
          </ModalHeader>
          <ModalCloseButton _focus={{ outline: "none" }} />

          <ModalBody color="primary" px="20">
            <Grid templateColumns="repeat(2,1fr)" gap="6">
              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="lg">
                  Nombre del servicio:
                </FormLabel>
                <Text fontSize="md" color="letter" fontWeight="light">
                  {postData ? postData.pst_nombre : `Nombre de post`}
                </Text>
              </FormControl>

              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="lg">
                  Nombre del proyecto:
                </FormLabel>
                <Text fontSize="md" color="letter" fontWeight="light">
                  {service
                    ? service.msj_nombre_propuesta
                    : "Nombre de proyecto"}
                </Text>
              </FormControl>

              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="lg">
                  Monto total:
                </FormLabel>
                <Text fontSize="md" color="letter" fontWeight="light">
                  S/ {service ? service.msj_precio_prop : "0"}
                </Text>
              </FormControl>

              {/* <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="lg">
                  Cuenta total:
                </FormLabel>
                <Text fontSize="md" color="letter" fontWeight="light">
                  s/ 2500
                </Text>
              </FormControl> */}

              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="lg">
                  Fecha de inicio:
                </FormLabel>
                <Text fontSize="md" color="letter" fontWeight="light">
                  {service
                    ? format(
                        new Date(service.trb_createdAt),
                        "do 'de' MMMM yyyy",
                        { locale: es }
                      )
                    : "11/12/2020"}
                </Text>
              </FormControl>

              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="lg">
                  Fecha final:
                </FormLabel>
                <Text fontSize="md" color="letter" fontWeight="light">
                  {service
                    ? format(
                        new Date(service.trb_updatedAt),
                        "do 'de' MMMM yyyy",
                        { locale: es }
                      )
                    : "11/12/2020"}
                </Text>
              </FormControl>

              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="lg">
                  Cliente:
                </FormLabel>
                <Text fontSize="md" color="letter" fontWeight="light">
                  {service.provider === "1"
                    ? `${dataOtherUser.us_nombre} ${dataOtherUser.us_apellido}`
                    : `${user.us_nombre} ${user.us_apellido}`}
                </Text>
              </FormControl>

              <FormControl mb="2">
                <FormLabel color="primary" fontWeight="medium" fontSize="lg">
                  Trabajador:
                </FormLabel>
                <Text fontSize="md" color="letter" fontWeight="light">
                  {service.provider === "1"
                    ? `${user.us_nombre} ${user.us_apellido}`
                    : `${dataOtherUser.us_nombre} ${dataOtherUser.us_apellido}`}
                </Text>
              </FormControl>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button
              bg="transparent"
              variant="light"
              fontSize="sm"
              width="100px"
              onClick={onClose}
            >
              Cancelar
            </Button>

            <Button
              fontSize="sm"
              width="100px"
              variant="primary"
              type="submit"
              className="buttonDisabledPrimary"
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                handlePrint()
              }}
            >
              Descargar
            </Button>
            <div style={{ display: "none" }}>
              <PrintView ref={componentRef} boucher={boucher} />
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
