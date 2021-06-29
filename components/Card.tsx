import { Box, Text, Flex } from "@chakra-ui/react"
import Image from "next/image"
import styles from "../styles/sections/Home.module.css"
export default function Card({ title, price, img }) {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={img} alt="Prueba img" height="300" width="300" />

      <Box p="5">
        <Flex align="center" justify="center" direction="column">
          <Flex align="center" justify="center">
            <Text fontSize="md" className={styles.bold500}>
              {title}
            </Text>
          </Flex>
          <Flex align="center" justify="center">
            <Text fontSize="md" className={styles.bold200} color="gray">
              Desde S/. {price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
