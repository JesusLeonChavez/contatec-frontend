import { Box, Flex, Text } from "@chakra-ui/react"
import ZIcon from "../components/Icon"

export default function Notifications() {
  return (
    <Box h="200" overflow="auto" minW="xl">
      {[1, 2, 3, 4, 5, 6].map((notifElement, idx) => (
        <Flex color="gray" align="center" py="1" minW="80" key={idx}>
          <ZIcon name="avatar" color="primary" size={35} />
          <Text px="4">
            <b style={{ color: "var(--secondary)" }}>Juancho</b> - Se acaba de
            publicar un evento:{" "}
            <b style={{ color: "var(--secondary)" }}>Matrimonio</b>
          </Text>
        </Flex>
      ))}
    </Box>
  )
}
