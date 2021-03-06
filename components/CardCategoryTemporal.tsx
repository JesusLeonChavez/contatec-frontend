/* eslint-disable camelcase */

import { Box, Text, Flex } from "@chakra-ui/react"

import ZIcon from "../components/Icon/ZIcon"

import styles from "../styles/sections/Home.module.css"

import Image from "next/image"

// interface Post {
//   id: number
//   createdAt: string
//   updatedAt: string
//   pst_isActive: boolean
//   pst_descripcion_corta: string
//   pst_nombre: string
//   pst_descripcion_incluye: string
//   pst_descripcion: string
//   pst_imagen_1: string
//   pst_imagen_2: string
//   pst_imagen_3: string
//   pst_imagen_4: string
//   pst_imagen_5: string
//   pst_precioBase: number
// }

interface PropsCard {
  title: string

  imageUrl: string
}

export default function CardCategory({ title, imageUrl }: PropsCard) {
  return (
    <Box borderRadius="lg" overflow="hidden" mx="3">
      <Image src={imageUrl} alt={title} height="500" width="500" />

      <Box px="2" pb="5">
        <Flex align="flex-start" justify="center" direction="column">
          <Flex align="center" justify="space-between" w="full" p="3">
            <Flex align="center" w="40px" justify="space-between">
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
            <Text fontSize="md" className={styles.bold500} color="primary">
              Servicio de prensa
            </Text>
          </Flex>

          <Flex align="center" justify="flex-start">
            <Text fontSize="sm" className={styles.bold200} color="primary">
              Por Lusi suarez
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
