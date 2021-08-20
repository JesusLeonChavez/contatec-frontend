import { Box, Grid } from "@chakra-ui/react"

import Comentary from "../../../../components/Comentary"

export default function CategoryTittle({ reviews }: { reviews: any }) {
  return (
    <Box py="6">
      <div className="generalWrapper">
        <Grid templateColumns={{ base: "100%", lg: "70% 30%" }}>
          <Box>
            {reviews &&
              reviews.map((review, idx) => (
                <Comentary
                  key={idx}
                  img={review.avatar}
                  name={review.name}
                  comentary={review.comentary}
                  quantityStars={review.score}
                />
              ))}
          </Box>
        </Grid>
      </div>
    </Box>
  )
}
