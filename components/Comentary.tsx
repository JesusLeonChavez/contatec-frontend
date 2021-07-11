import { Box, Flex, Text, Avatar } from "@chakra-ui/react"
import ZIcon from "./Icon/ZIcon"

interface ComentaryProps {
  img: string
  name: string
  comentary: string
  quantityStars: number
}
export default function Comentary({
  img,
  name,
  comentary,
  quantityStars
}: ComentaryProps) {
  return (
    <Box borderBottomWidth="1px" py="6">
      <Flex align="center" justify="start" py="6">
        <Avatar size="lg" name={name} src={img} mx="1" alt={name} />
        <Box mx="3">
          <Text>{name}</Text>
          <Flex align="center">
            <Text>{quantityStars}</Text>
            <ZIcon name="star" color="secondary" />
          </Flex>
        </Box>
      </Flex>
      <Box>{comentary}</Box>
    </Box>
  )
}
