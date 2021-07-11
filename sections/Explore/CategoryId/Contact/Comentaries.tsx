import { Box, Grid } from "@chakra-ui/react"

import Comentary from "../../../../components/Comentary"

export default function CategoryTittle() {
  return (
    <Box py="6">
      <div className="generalWrapper">
        <Grid templateColumns={{ base: "100%", lg: "70% 30%" }}>
          <Box>
            <Comentary
              img="https://bit.ly/broken-link"
              name="Oshigaki Kisame"
              comentary="Explora tu creatividad con nuevas técnicas en redes y mejora el alcance
              a tu publico objetivo"
              quantityStars={4}
            />
            <Comentary
              img="https://bit.ly/broken-link"
              name="Oshigaki Kisame"
              comentary="Explora tu creatividad con nuevas técnicas en redes y mejora el alcance
              a tu publico objetivo"
              quantityStars={4}
            />
            <Comentary
              img="https://bit.ly/broken-link"
              name="Oshigaki Kisame"
              comentary="Explora tu creatividad con nuevas técnicas en redes y mejora el alcance
              a tu publico objetivo"
              quantityStars={4}
            />
            <Comentary
              img="https://bit.ly/broken-link"
              name="Oshigaki Kisame"
              comentary="Explora tu creatividad con nuevas técnicas en redes y mejora el alcance
              a tu publico objetivo"
              quantityStars={4}
            />
          </Box>
        </Grid>
      </div>
    </Box>
  )
}
