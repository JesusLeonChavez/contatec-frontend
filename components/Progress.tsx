import { Progress, Flex, Text, Grid } from "@chakra-ui/react"
import ZIcon from "./Icon/ZIcon"
export default function ProgressValoration({ value, start, quantity }) {
  return (
    <Grid templateColumns="80% 20%" py="1">
      <Progress colorScheme="green" size="lg" value={value} borderRadius="5" />
      <Flex align="center" justify="center">
        <Text fontSize="xs" px="1">
          {start}
        </Text>
        <ZIcon name="star" />
        <Text fontSize="xs" px="3">
          ({quantity})
        </Text>
      </Flex>
    </Grid>
  )
}
