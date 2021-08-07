import { Box, Flex, Text } from "@chakra-ui/react"
import ZIcon from "../../components/Icon"

export default function Users(){
  return(
    <Box w="295px" >
      <Flex color="gray" align="center" py="1" minW="80">
        <ZIcon name="avatar" color="primary" size={50} />
        <Text px="4">
          <b style={{ color: "var(--secondary)" }}>Lucy León</b> - Te ha mando
          una cotización:{" "}
          <b style={{ color: "var(--secondary)" }}>Desarrollo</b>
        </Text>
      </Flex>
    </Box>
  )
}