import styles from "../../styles/sections/Show.module.css"
import { Flex, Avatar, Text, Circle } from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"

export default function ProfilePicture() {
  return (
    <div
      className={styles.containerWithBackground}
      style={{ position: "relative" }}
    >
      <div className="generalWrapper" style={{ height: "300px" }}>
        <Flex align="flex-end" w="100%" h="100%">
          <Flex align="center" position="absolute" top="200px">
            <Avatar
              size="2xl"
              name="Oshigaki Kisame"
              src="https://bit.ly/broken-link"
              mx="1"
              position="relative"
            >
              <Circle
                pos="absolute"
                w="45px"
                h="45px"
                bg="circleicons"
                left="100px"
                top="80px"
              >
                <ZIcon name="pencil" color="primary" pointer />
              </Circle>
            </Avatar>
          </Flex>
          <Text
            color="primary"
            ml="40"
            py="2"
            className="bold500"
            fontSize="35px"
          >
            Lucy León Raskov
          </Text>
        </Flex>
      </div>
    </div>
  )
}
