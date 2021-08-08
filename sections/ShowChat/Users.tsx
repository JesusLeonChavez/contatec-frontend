import { Box, Flex, Text } from "@chakra-ui/react"
import ZIcon from "../../components/Icon"

export default function Users() {
  return (
    <Box ml="5" w="295px">
      <Flex color="gray" align="center" py="1" minW="80">
        <ZIcon name="avatar" color="primary" size={50} />
        <Box px="4">
          <Text size="md" align="start" color="#482F51">
            Lucy León
          </Text>
          <Text size="md" align="start">
            Estoy interesada en coti...
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
