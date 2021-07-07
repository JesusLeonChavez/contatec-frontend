import { Box, Grid, Flex, Avatar, Text, Button } from "@chakra-ui/react"

export default function CategoryTittle() {
  return (
    <Box>
      <div className="generalWrapper">
        <Grid templateColumns={{ base: "100%", lg: "70% 30%" }}>
          <Box>
            <Flex align="center" justify="start" py="6">
              <Avatar
                size="xl"
                name="Oshigaki Kisame"
                src="https://bit.ly/broken-link"
                mx="1"
              />
              <Grid templateRows="20% 20% 60%" mx="3" gap="2">
                <Text className="bold500" fontSize="md">
                  Liliana Villanueva
                </Text>
                <Text fontSize="sm">Publicista y experta en redes</Text>
                <Button variant="primary">Contactar</Button>
              </Grid>
            </Flex>
          </Box>
        </Grid>
      </div>
    </Box>
  )
}
