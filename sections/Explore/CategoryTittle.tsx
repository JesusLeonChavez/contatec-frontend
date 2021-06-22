import { Box, Flex, Text, Button, Grid } from "@chakra-ui/react"
export default function CategoryTittle() {
  return (
    <Box>
      <div className="generalWrapper">
        <Flex align="center" justify="center" py="5">
          <Text
            fontSize="5xl"
            className="bold600"
            align="center"
            color="primary"
          >
            Elige una catogoría
          </Text>
        </Flex>
        <Grid
          gap="10"
          py="5"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)"
          }}
        >
          <Button variant="third">Marketing</Button>
          <Button variant="third">Desarrollo web</Button>
          <Button variant="third">Programación</Button>
          <Button variant="third">Negocios</Button>
          <Button variant="third">Datos</Button>
          <Button variant="third">Diseño gráfico</Button>
        </Grid>
      </div>
    </Box>
  )
}
