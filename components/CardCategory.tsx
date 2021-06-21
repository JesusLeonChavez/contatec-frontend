import { Box, Image, Text, Flex } from "@chakra-ui/react"
import ZIcon from "../components/Icon/ZIcon"

import styles from "../styles/sections/Home.module.css"

export default function Card({ title }) {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4
  }

  return (
    <Box borderRadius="lg" overflow="hidden" mx="3">
      <Image src={property.imageUrl} alt={property.imageAlt} h="sm" />

      <Box pr="5" pl="5" pb="5">
        <Flex align="flex-start" justify="center" direction="column">
          <Flex align="center" justify="space-between" w="full" p="3">
            <Flex align="center">
              <ZIcon name="star" />
              <Text fontSize="sm" className={styles.bold200} color="primary">
                4.0
              </Text>
            </Flex>
            <Text fontSize="sm" className={styles.bold200} color="primary">
              S/. 200
            </Text>
          </Flex>
          <Flex align="center" justify="flex-start">
            <Text fontSize="md" className={styles.bold500}>
              {title}
            </Text>
          </Flex>
          <Flex align="center" justify="flex-start">
            <Text fontSize="sm" className={styles.bold200} color="primary">
              Por Luis Sotelo
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
