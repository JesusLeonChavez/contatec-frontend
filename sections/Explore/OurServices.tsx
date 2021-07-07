import { Box, Flex, Grid, Text } from "@chakra-ui/react"
import CardCategory from "../../components/CardCategory"

export default function OurServices() {
  return (
    <Box py={{ base: "1", md: "8" }}>
      <div className="generalWrapper">
        <Flex align="center" justify="flex-start" py="5">
          <Text fontSize="3xl" className="bold500" color="primary">
            Nuestros servicios
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
            <CardCategory key={item} title="Marketing digital" />
          ))}
        </Grid>
      </div>
    </Box>
  )
}
