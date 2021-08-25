import styles from "../../styles/sections/Show.module.css"
import {
  Box,
  Text,
  Flex,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from "@chakra-ui/react"
import ModalDowload from "../ShowData/ModalDowload"
import React, { useContext, useEffect, useState } from "react"
import ModalSteper from "./ModalSteper"
import { DataContext } from "../../store/GlobalState"
import { get, patch, post } from "../../utils/http"
import { CulqiProvider, Culqi } from "react-culqi"
import SelectField, { Option } from "../../components/SelectField"
import RateServiceModal from "../Explore/CategoryId/Contact/RateServiceModal"

interface PayCardProps {
  service: any
  user: any
  setSelectedService: any
  setIsEditting: any
  setIsUpdatingServices: React.Dispatch<React.SetStateAction<boolean>>
}

function PayCard({
  service,
  user,
  setSelectedService,
  setIsEditting,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setIsUpdatingServices
}: PayCardProps) {
  const [dataOtherUser, setDataOtherUser] = useState<any>(null)
  const [postData, setPostData] = useState<any>(null)
  useEffect(() => {
    if (!service) return
    const getOtherUser = async () => {
      let data
      let error
      if (service.provider === "1") {
        const { data: dataObtenida, error: errorObtenido } = await get(
          `/api/user/info/${service.msj_user_to}`
        )
        error = errorObtenido
        data = dataObtenida
      } else {
        const { data: dataObtenida, error: errorObtenido } = await get(
          `/api/user/info/${service.msj_user_from}`
        )
        error = errorObtenido
        data = dataObtenida
      }
      if (error) {
        console.log(error)
        return
      }
      // console.log("other user", data)
      setDataOtherUser(data)
    }
    getOtherUser()
    const getPostData = async () => {
      if (!service.msjIdPostPropuestaId) return
      const { data, error } = await get(
        `/api/post/${service.msjIdPostPropuestaId}`
      )

      if (error) {
        console.log(error)
        return
      }
      // console.log("Post data", data)
      setPostData(data)
    }
    getPostData()
  }, [])

  if (service.provider === "1") {
    return (
      <Flex
        backgroundColor="gray.200"
        padding="4"
        marginBottom="20px"
        justifyContent="space-between"
        w="80%"
      >
        <Box>
          <Text size="md" align="start">
            Servicio: {service.msj_descripcion_prop}
          </Text>
          <Text size="md" align="start">
            Monto: S/ {service.msj_precio_prop}
          </Text>
        </Box>
        <Flex align="center" justify="end">
          {service && dataOtherUser && (
            <>
              <ModalSteper
                service={service}
                user={user}
                dataOtherUser={dataOtherUser}
                postData={postData}
              />
              {service.trb_estado === "Contratado" ? (
                <h3 style={{ margin: "0 10px" }}>Pendiente</h3>
              ) : (
                <>
                  <h3>{service.trb_estado}</h3>
                  {service.review_exists === "0" && (
                    <Button
                      mx="3"
                      variant="primary"
                      onClick={() => {
                        setSelectedService(service)
                        setIsEditting(true)
                      }}
                    >
                      Actualizar
                    </Button>
                  )}
                </>
              )}
            </>
          )}
        </Flex>
      </Flex>
    )
  }
  return (
    <Flex
      backgroundColor="gray.200"
      padding="4"
      marginBottom="20px"
      justifyContent="space-between"
      w="80%"
    >
      <Box>
        <Text size="md" align="start">
          Servicio: {service.msj_descripcion_prop}
        </Text>
        <Text size="md" align="start">
          Monto: S/ {service.msj_precio_prop}
        </Text>
      </Box>
      {/* TODO: Revisar renderizado condicional (es mas complejo de lo que deberia) */}
      <Flex align="center" justify="start">
        {/* Funcionalidad de pago! */}
        {service && dataOtherUser && (
          <>
            {service.trb_estado === "Contratado" ? (
              <Culqi>
                {({ openCulqi, setAmount }) => {
                  return (
                    <Button
                      variant="primary"
                      onClick={async () => {
                        await setAmount(
                          service ? Number(service.msj_precio_prop) * 100 : 1000
                        )
                        await setSelectedService(service)
                        await openCulqi()
                      }}
                    >
                      Pagar
                    </Button>
                  )
                }}
              </Culqi>
            ) : service.trb_estado === "En proceso" ? (
              <div>
                <h1 style={{ margin: "0 10px" }}>En proceso</h1>
              </div>
            ) : (
              <div>
                <h1 style={{ margin: "0 10px" }}>Finalizado</h1>
                {service && service?.review_exists === "0" ? (
                  <RateServiceModal
                    post={{ id: service.msjIdPostPropuestaId }}
                    trabajo={service.trb_ID}
                    variant="fourth"
                    width="6xs"
                    showModalButtonText="Valorar servicio"
                    setIsUpdatingServices={setIsUpdatingServices}
                  />
                ) : (
                  <h1>{service ? service.review_score : "hola"}</h1>
                )}
              </div>
            )}
            <ModalSteper
              service={service}
              user={user}
              dataOtherUser={dataOtherUser}
              postData={postData}
            />
            <ModalDowload
              service={service}
              user={user}
              dataOtherUser={dataOtherUser}
              postData={postData}
            />
          </>
        )}
      </Flex>
    </Flex>
  )
}

export default function Pay() {
  const { state } = useContext(DataContext)
  const { auth } = state
  const [myServices, setMyServices] = useState<any[]>([])
  const [selectedService, setSelectedService] = useState<any>(null)
  // isUpdatingServices es para rehacer peticion (similar a redity)
  const [isUpdatingServices, setIsUpdatingServices] = useState(false)
  const [serviceStatus, setServiceStatus] = useState<any>(null)
  // Para editar estado (Uso del proveedor)
  const [isEditting, setIsEditting] = useState(false)
  // Para calificar trabajo (Uso del cliente).
  // eslint-disable-next-line no-unused-vars
  const [isReviewing, setIsReviewing] = useState(false)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    isOpen: isReviewOpen,
    // eslint-disable-next-line no-unused-vars
    onOpen: onReviewOpen,
    // eslint-disable-next-line no-unused-vars
    onClose: onReviewClose
  } = useDisclosure()

  const handlePay = async (token: any, service: any) => {
    // console.log(token)
    // console.log(service)
    // token.id
    const body = {
      pgo_nombre: auth.user.us_nombre,
      pgo_apellido: auth.user.us_apellido,
      pgo_token_culqi: token.id,
      pgo_correo: token.email,
      pgo_monto: service.msj_precio_prop * 100,
      pgo_trabajoId: service.trb_ID
    }
    await post("/api/pay/service", body)
    // TODO: Agregar toaster si hace post con exito
    setSelectedService(null)
    setIsUpdatingServices(prev => !prev)
  }

  useEffect(() => {
    if (!auth?.user?.id) return
    const userData = async () => {
      const { data: total } = await get("/api/user/info")
      const { data } = total
      setMyServices(data)
    }
    userData()
    setIsEditting(false)
  }, [auth?.user?.id, isUpdatingServices])

  useEffect(() => {
    if (!isEditting) {
      onClose()
      setSelectedService(null)
      setServiceStatus(null)
      return
    }

    onOpen()
  }, [isEditting])

  const handleUpdateStatus = async () => {
    if (selectedService.trb_estado === serviceStatus.value) {
      // TODO: TOASTER NO SE REALIZO NINGUN CAMBIO
      setIsEditting(false)
      return
    }
    const body = {
      trb_estado: serviceStatus.value
    }
    await patch(`/api/work/update-status/${selectedService.trb_ID}`, body)
    // TODO: Mostrar toaster de que se actualizo correctamente
    // console.log(data)
    console.log("Servicio seleccionado: ", selectedService)
    setIsUpdatingServices(prev => !prev)
  }

  return (
    <>
      <Text color="primary" className={styles.mainLabel}>
        Servicios
      </Text>
      <Text color="primary" align="start" fontWeight="medium" pb="4">
        Puedes revisar tu lista de pagos y sus estado aquí.
      </Text>
      <Box overflowY="scroll" h="250px">
        <Flex justify="start" direction="column">
          <CulqiProvider
            //    Cambiar a env
            publicKey="pk_test_9824531d3eed6c8a"
            title="Pago de servicio Contatec"
            description="Facilitamos el servicio hacia ti"
            onToken={e => handlePay(e, selectedService)}
            onError={error => {
              console.log(error)
            }}
            options={{
              style: {
                maincolor: "#FBD76D",
                buttontext: "white",
                maintext: "#482F51",
                desctext: "#2B1C31"
                // logo: "//placekitten.com/400/400"
              }
            }}
          >
            {myServices.map((service, index) => (
              <PayCard
                service={service}
                user={auth.user}
                key={index}
                setSelectedService={setSelectedService}
                setIsEditting={setIsEditting}
                setIsUpdatingServices={setIsUpdatingServices}
              />
            ))}
          </CulqiProvider>
        </Flex>
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={() => setIsEditting(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Actualización de estado de trabajo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SelectField
              fullWidth
              option={serviceStatus}
              placeholder="Seleccione una categoría "
              onChange={e => setServiceStatus(e)}
            >
              <Option value="En proceso">En proceso</Option>
              <Option value="Finalizado">Finalizado</Option>
            </SelectField>
          </ModalBody>

          <ModalFooter>
            <Button variant="primary" onClick={() => handleUpdateStatus()}>
              Actualizar estado
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        isOpen={isReviewOpen}
        onClose={() => setIsReviewing(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Calificar trabajo de trabajo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>Formulario de review</h1>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="primary"
              onClick={() => console.log("enviar review")}
            >
              Calificar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
