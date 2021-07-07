import { Box, Grid } from "@chakra-ui/react"

import Comentary from "../../../../components/Comentary"

export default function CategoryTittle() {
  return (
    <Box py="6">
      <div className="generalWrapper">
        <Grid templateColumns={{ base: "100%", lg: "70% 30%" }}>
          <Box>
            <Comentary />
            <Comentary />
            <Comentary />
            <Comentary />
            <Comentary />
            <Comentary />
            <Comentary />
          </Box>
        </Grid>
      </div>
    </Box>
  )
}
