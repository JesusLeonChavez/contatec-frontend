import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"
import router from "next/router"
// import router from "next/router"
import { useContext } from "react"
import { DataContext } from "../../store/GlobalState"
import { post } from "../../utils/http"
import showToast from "../../components/Toast"
interface MessageProps {
  message: any
  own?: boolean
}
export default function MessageProposal({ message, own }: MessageProps) {
  const { state } = useContext(DataContext)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { auth, socket } = state
  // console.log("message: ", message)

  const handleAcceptPropose = async () => {
    if (!auth?.user?.id) return
    if (new Date() > new Date(message.msj_caducidad_prop)) {
      showToast(
        "Error al aceptar propuesta",
        "Plazo de aceptación vencido",
        "error"
      )
      return
    }
    // TODO: Agregar alerta para validar si desea el trabajo

    const { data, error } = await post(`/api/work/accept-propose`, {
      id_mensaje: message.id
    })
    if (error) {
      console.log(error)
      return
    }

    socket.emit("acceptPropose", {
      data,
      message
    })
    setTimeout(() => {
      router.push("/mostrar-datos")
    }, 500)
  }
  return (
    <Box
      d="flex"
      justifyContent={`${own === true ? "flex-end" : "flex-start"}`}
      align="center"
      my="3"
      mx="2"
    >
      <Box w="800px">
        <Flex
          px="5"
          color="gray"
          align="center"
          py="1"
          w="full"
          direction={`${own === true ? "row-reverse" : "row"}`}
        >
          {/* <Avatar size="md" name="name" position="relative" mx="2" /> */}

          <Box
            bg="gray.100"
            color="primary"
            d="flex"
            flexDirection="column"
            alignItems="start"
            borderRadius="lg"
            borderColor="primary"
            borderWidth="1px"
          >
            <Box
              w="full"
              py="2"
              px="3"
              bg="primary"
              d="flex"
              justifyContent="start"
              alignItems="center"
              borderTopRadius="lg"
            >
              <Text color="white">{message.msj_nombre_propuesta}</Text>
            </Box>
            <Flex direction="column" align="start" p="3">
              <Flex>
                <Text color="letter" fontWeight="semibold">
                  Presupuesto:{" "}
                </Text>
                <Text color="letter" pl="1">
                  S/. {message.msj_precio_prop}
                </Text>
              </Flex>

              <Flex>
                <Text color="letter" fontWeight="semibold">
                  Fecha límite:{" "}
                </Text>
                <Text color="letter" pl="1">
                  {formatDistanceToNow(new Date(message.msj_caducidad_prop), {
                    locale: es,
                    addSuffix: true
                  })}
                </Text>
              </Flex>
              <Text color="letter" fontWeight="semibold">
                Descripcion:{" "}
              </Text>
              <Text color="letter">{message.msj_descripcion_prop}</Text>
            </Flex>

            <Box bg="gray.200" w="full" borderBottomRadius="lg">
              {!own && (
                <Button
                  variant="secondary"
                  my="2"
                  mx="auto"
                  w="calc(100% - 20px)"
                  color="letter"
                  _hover={{ backgroundColor: "orange" }}
                  // agregar validador (alert/modal)
                  onClick={handleAcceptPropose}
                >
                  Contratar
                </Button>
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
