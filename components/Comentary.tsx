import { Box, Flex, Text, Avatar } from "@chakra-ui/react"
import ZIcon from "./Icon/ZIcon"
export default function Comentary() {
  return (
    <Box borderBottomWidth="1px" py="6">
      <Flex align="center" justify="start" py="6">
        <Avatar
          size="lg"
          name="Oshigaki Kisame"
          src="https://bit.ly/broken-link"
          mx="1"
        />
        <Box mx="3">
          <Text>Renata Rojas</Text>
          <Flex align="center">
            <Text>4.0</Text>
            <ZIcon name="star" color="secondary" />
          </Flex>
        </Box>
      </Flex>
      <Box>
        Explora tu creatividad con nuevas técnicas en redes y mejora el alcance
        a tu publico objetivo
      </Box>
    </Box>
  )
}
