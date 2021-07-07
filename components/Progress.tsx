import { Progress, Flex, Text, Grid, Box } from "@chakra-ui/react"
import ZIcon from "./Icon/ZIcon"
export default function ProgressValoration({ value, start, quantity }) {
  return (
    <Grid templateColumns="80% 20%" py="1">
      <Progress colorScheme="yellow" size="lg" value={value} borderRadius="5" />
      <Flex align="center" justify="center">
        <Box d="flex" justifyContent="start" w="100px">
          <Text fontSize="xs" px="1">
            {start}
          </Text>
          <ZIcon name="star" color="secondary" />
          <Text fontSize="xs" px="3">
            ({quantity})
          </Text>
        </Box>
      </Flex>
    </Grid>
  )
}
