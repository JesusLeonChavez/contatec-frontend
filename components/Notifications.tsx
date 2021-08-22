import { Box, Flex, Text } from "@chakra-ui/react"
import { useEffect, useContext } from "react"

import ZIcon from "../components/Icon"
import { DataContext } from "../store/GlobalState"

export default function Notifications({
  recentNotifications,
  setRecentNotifications
}) {
  const { state } = useContext(DataContext)
  const { auth, socket } = state

  useEffect(() => {
    if (Object.keys(auth).length === 0) return
    if (Object.keys(socket).length === 0) return

    const functionSocket = ({ data }) => {
      setRecentNotifications(prev => [
        ...prev,
        { id: data.data.trb_mensaje.id, message: data.message }
      ])
    }
    socket.on("acceptYourPropose", functionSocket)

    return () => {
      socket.off("acceptYourPropose")
    }
  }, [auth?.user?.id, socket])
  return (
    <Box h="200" overflow="auto" minW="xl">
      {recentNotifications.length > 0 ? (
        recentNotifications.map((notifElement, idx) => (
          <Flex color="gray" align="center" py="1" minW="80" key={idx}>
            <ZIcon name="avatar" color="primary" size={35} />
            <Text px="4">
              <b style={{ color: "var(--secondary)" }}>ID</b> -{" "}
              {notifElement.id} -
              <b style={{ color: "var(--secondary)" }}>
                {notifElement.message}
              </b>
            </Text>
          </Flex>
        ))
      ) : (
        <Flex color="gray" align="center" py="1" minW="80">
          <Text
            m="0 auto"
            textAlign="center"
            display="flex"
            justifyItems="center"
            px="4"
          >
            No tiene notificaciones
          </Text>
        </Flex>
      )}
    </Box>
  )
}
