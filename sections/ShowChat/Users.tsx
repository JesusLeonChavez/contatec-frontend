import { Avatar, Box, Flex, Text } from "@chakra-ui/react"
// import ZIcon from "../../components/Icon"

export default function Users({
  idx,
  name,
  lastMessage,
  image,
  activeChat,
  onClick
}) {
  return (
    <Box
      px="4"
      w="100%"
      cursor="pointer"
      py="4"
      transition="0.2s all ease-in-out"
      bg={`${idx === activeChat ? "secondary" : "white"}`}
      onClick={onClick}
    >
      <Flex color="gray" align="center" py="1" minW="80">
        {/* <ZIcon name="avatar" color="primary" size={50} /> */}
        <Avatar size="md" name={name} src={image} position="relative" />
        <Box px="4">
          <Text size="md" align="start" color="#482F51" textOverflow="ellipsis">
            {name}
          </Text>
          <Box
            // size="md"
            // align="start"
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            w="200px"
          >
            {lastMessage}
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
