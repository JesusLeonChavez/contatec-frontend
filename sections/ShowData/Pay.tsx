import styles from "../../styles/sections/Show.module.css"
import { Box, Text, Flex, Button } from "@chakra-ui/react"
import ModalDowload from "../ShowData/ModalDowload"
import React, { useContext, useEffect, useState } from "react"
import ModalSteper from "./ModalSteper"
import { DataContext } from "../../store/GlobalState"
import { get, post } from "../../utils/http"
import { CulqiProvider, Culqi } from "react-culqi"

function PayCard({ service, user, setSelectedService }) {
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
      console.log("other user", data)
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
      console.log("Post data", data)
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
        <Flex align="center" justify="space-evenly" w="180px">
          {service && dataOtherUser && (
            <>
              <ModalSteper
                service={service}
                user={user}
                dataOtherUser={dataOtherUser}
                postData={postData}
              />
              <button>Actualizar estado</button>
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
      {/* Revisar renderizado condicional (es mas complejo de lo que deberia) */}
      <Flex align="center" justify="space-around" w="180px">
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
                <h1>En proceso</h1>
              </div>
            ) : (
              <div>
                <h1>Finalizado</h1>
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
  const [isUpdatingServices, setIsUpdatingServices] = useState(false)

  const handlePay = async (token: any, service: any) => {
    console.log(token)
    console.log(service)
    // token.id
    const body = {
      pgo_nombre: auth.user.us_nombre,
      pgo_apellido: auth.user.us_apellido,
      pgo_token_culqi: token.id,
      pgo_correo: token.email,
      pgo_monto: service.msj_precio_prop,
      pgo_trabajoId: service.trb_ID
    }
    const data = await post("/api/pay/service", body)
    // Agregar toaster si hace post con exito
    // console.log(data)
    setSelectedService(null)
    setIsUpdatingServices(prev => !prev)
  }

  useEffect(() => {
    if (!auth?.user?.id) return
    const userData = async () => {
      const { data: total } = await get("/api/user/info")
      const { data } = total
      // console.log(data)
      // console.log("yo", auth.user)
      setMyServices(data)
    }
    userData()
  }, [auth?.user?.id, isUpdatingServices])

  return (
    <div>
      <Text color="primary" className={styles.mainLabel}>
        Servicios
      </Text>
      <Text color="primary" align="start" fontWeight="medium" pb="4">
        Puedes revisar tu lista de pagos y sus estado aquí.
      </Text>
      <Box overflowY="scroll" h="250px">
        <Flex justify="start" direction="column">
          <CulqiProvider
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
              />
            ))}
          </CulqiProvider>
        </Flex>
      </Box>
    </div>
  )
}
