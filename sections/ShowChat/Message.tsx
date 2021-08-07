import { Box, Flex, Text } from "@chakra-ui/react"
import ZIcon from "../../components/Icon"

export default function Users(){
  return(
    <Box h="200" overflow="auto" minW="xl">
      <Flex color="gray" align="center" py="1" minW="80" >
        <ZIcon name="avatar" color="primary" size={35} />
        <Text px="4">
          Hola soy Lucy
        </Text>
      </Flex>
    </Box>
  )
}