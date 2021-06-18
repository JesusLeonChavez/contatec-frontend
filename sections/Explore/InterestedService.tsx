import { Box, Flex, Text } from "@chakra-ui/react"

import CardCategory from "../../components/CardCategory"

export default function InterestedService() {
  return (
    <Box>
      <div className="generalWrapper">
        <Flex align="center" justify="flex-start" py="5">
          <Text fontSize="3xl" className="bold500">
            Servicios que te pueden interesar
          </Text>
        </Flex>

        <Flex justify="space-evenly">
          {["1", "2", "3", "4"].map(item => (
            <CardCategory key={item} title="Marketing digital" />
          ))}
        </Flex>
      </div>
    </Box>
  )
}
