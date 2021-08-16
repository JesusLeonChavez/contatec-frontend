import { Box, Text, Flex, Button } from "@chakra-ui/react"
import router from "next/router"
import { useContext, useEffect } from "react"

import ZIcon from "../components/Icon"
import { DataContext } from "../store/GlobalState"

export default function Inbox({
  recentMessages,
  setRecentMessages
}: {
  recentMessages: any
  setRecentMessages: any
}) {
  const { state } = useContext(DataContext)
  const { auth, socket } = state

  useEffect(() => {
    if (Object.keys(auth).length === 0) return
    if (Object.keys(socket).length === 0) return

    const functionSocket = ({ data }) => {
      if (data.msjUserToId === auth?.user?.id) {
        console.log(data)
        setRecentMessages(prev => [
          ...prev,
          { from: data.msjUserFromId, message: data.msj_contenido }
        ])
      }
    }
    socket.on("messageDefaultResponse", functionSocket)

    return () => {
      socket.off("messageDefaultResponse")
    }
  }, [auth?.user?.id, socket])

  return (
    <Box h="200" overflow="auto" minW="xl">
      {recentMessages.map((notifElement, idx) => (
        <Flex color="gray" align="center" py="1" minW="80" key={idx}>
          <ZIcon name="avatar" color="primary" size={35} />
          <Text px="4">
            <b style={{ color: "var(--secondary)" }}>{notifElement.from}</b> -{" "}
            {notifElement.message}{" "}
            {/* <b style={{ color: "var(--secondary)" }}>Desarrollo</b> */}
          </Text>
        </Flex>
      ))}
      <Button
        m="0 auto"
        textAlign="center"
        display="flex"
        justifyItems="center"
        colorScheme="#525252"
        align="center"
        variant="link"
        onClick={() => {
          setRecentMessages([])
          router.push("/mensajes")
        }}
      >
        Ver mas mensajes
      </Button>
    </Box>
  )
}
