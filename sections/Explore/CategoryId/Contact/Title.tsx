import { Box, Flex, Text, Circle } from "@chakra-ui/react"
import ZIcon from "../../../../components/Icon/ZIcon"

export default function CategoryTittle({ title }) {
  return (
    <Box>
      <div className="generalWrapper">
        <Box>
          <Flex align="center" justify="start" py="5">
            <Text
              fontSize="5xl"
              className="bold600"
              align="start"
              color="primary"
              mr="3"
            >
              {title}
            </Text>
            <Circle
              w="45px"
              h="45px"
              bg="#fff"
              boxShadow="0px 0.758065px 3.03226px rgba(0, 0, 0, 0.4);"
            >
              <ZIcon name="pencil" color="primary" />
            </Circle>
          </Flex>
          <Text fontSize="lg" align="start" color="primary">
            Explora tu creatividad con nuevas técnicas en redes y mejora el
            alcance a tu público objetivo
          </Text>
        </Box>
      </div>
    </Box>
  )
}
