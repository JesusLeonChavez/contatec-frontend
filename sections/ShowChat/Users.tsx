import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
// import ZIcon from "../../components/Icon"

export default function Users({ idx, name, lastMessage, image }) {
  return (
    <Box ml="5" w="295px">
      <Flex color="gray" align="center" py="1" minW="80">
        {/* <ZIcon name="avatar" color="primary" size={50} /> */}
        <Avatar size="md" name="name" src={image} position="relative" />
        <Box px="4">
          <Text size="md" align="start" color="#482F51">
            {name}
            {idx}
          </Text>
          <Text size="md" align="start">
            {lastMessage}
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}
