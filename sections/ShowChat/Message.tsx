import { Box, Flex, Text } from "@chakra-ui/react"
import ZIcon from "../../components/Icon"

export default function Message(own) {
  return (
    <Box h="200" overflow="auto" minW="xl">
      <div>
        <Flex px="5" color="gray" align="center" py="1" minW="80">
          <ZIcon name="avatar" color="primary" size={50} />
          <Text px="4">Estoy interesada en cotizar un proyecto </Text>
        </Flex>
      </div>
    </Box>
  )
}
