import { Box, Flex, Text, Button } from "@chakra-ui/react"
export default function CategoryTittle() {
  return (
    <Box>
      <div className="generalWrapper">
        <Flex align="center" justify="center" py="5">
          <Text fontSize="5xl" className="bold600">
            Elige una catogoría
          </Text>
        </Flex>
        <Flex justify="space-evenly" py="5">
          <Button variant="third">Marketing</Button>
          <Button variant="third">Desarrollo web</Button>
          <Button variant="third">Programación</Button>
          <Button variant="third">Negocios</Button>
          <Button variant="third">Datos</Button>
          <Button variant="third">Diseño gráfico</Button>
        </Flex>
      </div>
    </Box>
  )
}
