import { Box, Stat, StatLabel, StatNumber, StatGroup } from "@chakra-ui/react"

export default function Statistics({ worker }) {
  return (
    <Box
      border="2px solid gray.800"
      alignItems="center"
      w="100%"
      p="5"
      boxShadow="md"
      mb="15"
    >
      <StatGroup w="100%" d="flex">
        <Stat>
          <StatNumber textAlign="center">{worker.posts.length}</StatNumber>
          <StatLabel textAlign="center">Servicios publicados</StatLabel>
        </Stat>

        <Stat>
          <StatNumber textAlign="center">4.50/5</StatNumber>
          <StatLabel textAlign="center">Valoración promedio</StatLabel>
        </Stat>

        <Stat>
          <StatNumber textAlign="center">20</StatNumber>
          <StatLabel textAlign="center">Total de reseñas</StatLabel>
        </Stat>
      </StatGroup>
    </Box>
  )
}
