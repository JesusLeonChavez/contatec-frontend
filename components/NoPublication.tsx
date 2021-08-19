import ZIcon from "./Icon"

import { Grid, Box, Text } from "@chakra-ui/react"

export default function NoPublication() {
  return (
    <Grid aling="center">
      <Box m="auto">
        <ZIcon name="close" size={25} />
      </Box>

      <Text fontSize="25px" color="primary">
        Usted no ha realizado ninguna publicacion
      </Text>
    </Grid>
  )
}
