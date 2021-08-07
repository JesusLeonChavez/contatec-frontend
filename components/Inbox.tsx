import { Box, Text, Flex, Button } from "@chakra-ui/react"
import ZIcon from "../components/Icon"

export default function Inbox() {
  return (
    <Box h="200" overflow="auto" minW="xl">
      {[1, 2, 3, 4, 5, 6].map((notifElement, idx) => (
        <Flex color="gray" align="center" py="1" minW="80" key={idx}>
          <ZIcon name="avatar" color="primary" size={35} />
          <Text px="4">
            <b style={{ color: "var(--secondary)" }}>Lucy León</b> - Te ha mando
            una cotización:{" "}
            <b style={{ color: "var(--secondary)" }}>Desarrollo</b>
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
      >
        Ver mas mensajes
      </Button>
    </Box>
  )
}
