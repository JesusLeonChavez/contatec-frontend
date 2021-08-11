import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface MessageProps {
  own?: boolean
}
export default function Message({ own }: MessageProps) {
  return (
    <Flex
      d="flex"
      justify={`${own === true ? "end" : "start"}`}
      align="center"
      my="3"
      mx="2"
    >
      <Box maxW="500px">
        <Flex
          px="5"
          color="gray"
          align="center"
          py="1"
          maxW="500px"
          direction={`${own === true ? "row-reverse" : "row"}`}
        >
          <Avatar size="md" name="name" position="relative" mx="2" />
          <Text
            px="4"
            bg={`${own === true ? "primary" : "gray.100"}`}
            color={`${own === true ? "white" : "primary"}`}
            borderRadius="lg"
            py="2"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
            voluptas.
          </Text>
        </Flex>
      </Box>
    </Flex>
  )
}
