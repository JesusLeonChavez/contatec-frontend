import { Box, Flex, Text, Grid } from "@chakra-ui/react"
import CardCategoryTemporal from "../../components/CardCategoryTemporal"

export default function RecomendedService() {
  return (
    <Box py={{ base: "1", md: "8" }}>
      <div className="generalWrapper">
        <Flex align="center" justify="flex-start" py="5">
          <Text fontSize="3xl" className="bold500" color="primary">
            Servicio recomendados
          </Text>
        </Flex>

        <Grid
          justify="space-evenly"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)"
          }}
        >
          {["1", "2", "3", "4"].map(item => (
            <CardCategoryTemporal
              key={item}
              title="Marketing digital"
              imageUrl="/assets/marketing/marketing1.png"
            />
          ))}
        </Grid>
      </div>
    </Box>
  )
}
