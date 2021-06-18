import { Box, Flex, Text } from "@chakra-ui/react"
import CardCategory from "../../components/CardCategory"

export default function RecomendedService() {
  return (
    <Box>
      <div className="generalWrapper">
        <Flex align="center" justify="flex-start" py="5">
          <Text fontSize="3xl" className="bold500">
            Servicio recomendados
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
