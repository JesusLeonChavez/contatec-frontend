import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { formatDistanceToNow } from "date-fns"
import { es } from "date-fns/locale"
// import router from "next/router"
import { useContext } from "react"
import { DataContext } from "../../store/GlobalState"
import { post } from "../../utils/http"

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
      // TODO: Mostrar toaster de que ya vencio
      return
    }

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
            color="red"
            d="flex"
            flexDirection="column"
            justifyContent="start"
            borderRadius="lg"
            borderColor="primary"
            borderWidth="1px"
          >
            <Box
              h="80px"
              w="full"
              bg="primary"
              d="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text>{message.msj_nombre_propuesta}</Text>
            </Box>
            <strong>Presupuesto: </strong>
            <br />
            <span>{message.msj_precio_prop}</span>

            <strong>Fecha límite: </strong>
            <br />
            <span>
              {formatDistanceToNow(new Date(message.msj_caducidad_prop), {
                locale: es,
                addSuffix: true
              })}
            </span>

            <strong>Descripcion: </strong>
            <br />
            <span>{message.msj_descripcion_prop}</span>

            {!own && (
              <Button
                variant="primary"
                w="100px"
                // agregar validador (alert/modal)
                onClick={handleAcceptPropose}
                mx="auto"
              >
                Contratar
              </Button>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
