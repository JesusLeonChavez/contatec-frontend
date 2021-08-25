import { Box, Grid, Flex, Avatar, Text, Button } from "@chakra-ui/react"

export default function CategoryTittle({ creator, post }) {
  return (
    <Box>
      <div className="generalWrapper">
        <Grid templateColumns={{ base: "100%", lg: "70% 30%" }}>
          <Box>
            <Flex align="center" justify="start" py="6">
              <Avatar
                size="xl"
                name={`${creator?.us_nombre} ${creator?.us_apellido}`}
                src={creator.avatar}
                mx="1"
              />
              <Grid templateRows="20% 20% 60%" mx="3" gap="2">
                <Text className="bold500" fontSize="md">
                  {`${creator.us_nombre}${" "}${creator.us_apellido}`}
                </Text>
                <Text fontSize="sm">Colaborador de contatec</Text>
                <Button variant="third">Ver perfil</Button>
              </Grid>
            </Flex>
          </Box>
        </Grid>
      </div>
    </Box>
  )
}
