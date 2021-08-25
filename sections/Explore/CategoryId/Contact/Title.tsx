import { Box, Flex, Text, Circle } from "@chakra-ui/react"
import ZIcon from "../../../../components/Icon/ZIcon"
import { toCapitalFirstLetter } from "../../../../utils/toCapital"
import { useRouter } from "next/router"
export default function CategoryTittle({ title, briefDescription }) {
  const router = useRouter()
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
              wordBreak="break-word"
            >
              {toCapitalFirstLetter(title)}
            </Text>
            <Circle
              w="45px"
              h="45px"
              bg="#fff"
              boxShadow="0px 0.758065px 3.03226px rgba(0, 0, 0, 0.4);"
              cursor="pointer"
              onClick={() => {
                router.push("/publicar/nuevo_post")
              }}
            >
              <ZIcon name="pencil" color="primary" />
            </Circle>
          </Flex>
          <Text fontSize="lg" align="start" color="primary">
            {toCapitalFirstLetter(briefDescription)}
          </Text>
        </Box>
      </div>
    </Box>
  )
}
