import styles from "../../styles/sections/Show.module.css"
import { Box, Grid, Flex, Avatar, Text, Link, Circle } from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"

export default function CategoryTittle() {
  return (
    <div className={styles.conteinerConFondo}>
      <Box mt="250px" ml="100" pos="absolute">
        <div className="generalWrapper">
          <Grid>
            <Box>
              <Flex align="center" w="1000px">
                <Link>
                  <Avatar
                    size="2xl"
                    name="Oshigaki Kisame"
                    src="https://bit.ly/broken-link"
                    mx="1"
                  />
                </Link>
                <Link>
                  <Circle
                    pos="absolute"
                    ml="-3"
                    w="45px"
                    h="45px"
                    bg="circleicons"
                  >
                    <ZIcon name="pencil" color="primary" />
                  </Circle>
                </Link>
                <Grid>
                  <Text
                    fontFamily="Poppins"
                    color="primary"
                    ml="10"
                    className="bold500"
                    fontSize="35px"
                  >
                    Lucy León Raskov
                  </Text>
                </Grid>
              </Flex>
            </Box>
          </Grid>
        </div>
      </Box>
    </div>
  )
}
