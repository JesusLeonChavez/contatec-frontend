import { Box, Text, Grid } from "@chakra-ui/react"
import ZIcon from "./Icon"

export default function NoFoundCategory() {
  return (
    <Grid aling="center">
      <Box m="auto">
        <ZIcon name="ray" size={25} />
      </Box>
      <Text fontSize="25px" color="primary">
        No se encontro esta categoria
      </Text>
    </Grid>
  )
}
