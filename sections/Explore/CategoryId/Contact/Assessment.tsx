import { Text, Grid, Box, Flex, Button } from "@chakra-ui/react"
import ZIcon from "../../../../components/Icon"
import Progress from "../../../../components/Progress"
export default function Assessment() {
  return (
    <Box py="5">
      <div className="generalWrapper">
        <Grid templateColumns={{ base: "100%", lg: "70% 30%" }}>
          <Box>
            <Box>
              <Text fontSize="x1" className="bold600">
                Valoraciones
              </Text>
              <Flex align="center" justify="space-between">
                <Grid templateColumns="50% 60%" gap="3">
                  <Text fontSize="5xl" className="bold600">
                    4.5
                  </Text>
                  <Flex direction="column" justify="space-evenly">
                    <Text fontSize="xs">
                      <Flex>
                        <ZIcon name="star" color="secondary" />
                        <ZIcon name="star" color="secondary" />
                        <ZIcon name="star" color="secondary" />
                        <ZIcon name="star" color="secondary" />
                        <ZIcon name="star" color="white" />
                      </Flex>
                    </Text>
                    <Text fontSize="xs">6240 reseñas</Text>
                  </Flex>
                </Grid>
                <Button variant="fourth">Valorar servicio</Button>
              </Flex>
            </Box>
            <Box>
              <Progress value={20} start="5" quantity={1000} />
              <Progress value={35} start="4" quantity={2000} />
              <Progress value={70} start="3" quantity={4500} />
              <Progress value={15} start="2" quantity={200} />
              <Progress value={90} start="1" quantity={3000} />
            </Box>
          </Box>
        </Grid>
      </div>
    </Box>
  )
}
