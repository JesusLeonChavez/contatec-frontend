import { Text, Box, Button, Grid } from "@chakra-ui/react"
import Statistics from "../WorkerProfile/Statistics"

export default function Profile() {
  return (
    <div className="generalWrapper" style={{ padding: "50px 10px" }}>
      <Grid templateColumns="repeat(3, 1fr)" gap={5}>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Button
            variant="primary"
            w="150px"
            pl="15"
            mb="10"
            ml="25"
            type="submit"
            className="buttonDisabledPrimary"
          >
            Contactar
          </Button>
          <Text>En contatec desde Julio, 2021</Text>
        </Box>

        <Box pl="100" w="700px">
          <Statistics />
        </Box>
      </Grid>
    </div>
  )
}
