/* eslint-disable camelcase */
import { Box, Text, Flex } from "@chakra-ui/react"
import ZIcon from "../components/Icon/ZIcon"

import styles from "../styles/sections/Home.module.css"
import Image from "next/image"
import ModalNewPost from "../sections/Post/ModalNewPost"

interface User {
  avatar: string
  createdAt: string
  id: number
  updatedAt: string
  us_apellido: string
  us_correo: string
  us_nombre: string
}

interface Post {
  id: number
  createdAt: string
  updatedAt: string
  pst_isActive: boolean
  pst_descripcion_corta: string
  pst_nombre: string
  pst_descripcion_incluye: string
  pst_descripcion: string
  pst_imagen_1: string
  pst_imagen_2: string
  pst_imagen_3: string
  pst_imagen_4: string
  pst_imagen_5: string
  pst_precioBase: number
  pstUsuarioId: User
}

interface PropsCard {
  post: Post
  categoryScreen?: boolean
}
export default function CardCategory({
  post,
  categoryScreen = true
}: PropsCard) {
  return (
    <Box borderRadius="lg" overflow="hidden" mx="3">
      <Box position="relative">
        <Image
          src={post?.pst_imagen_5 || "/assets/images/marketing/marketing1.png"}
          alt={post?.pst_nombre}
          height="500"
          width="500"
        />
        <Flex
          align="center"
          justify="space-between"
          w="full"
          p="3"
          position="absolute"
          bottom="1"
          backgroundColor="whiteAlpha.700"
        >
          <Flex align="center" w="40px" justify="space-between">
            <ZIcon name="star" color="secondary" />
            <Text fontSize="sm" className={styles.bold400} color="primary">
              4.0
            </Text>
          </Flex>
          {categoryScreen ? (
            <Text fontSize="sm" className={styles.bold400} color="primary">
              S/. {post?.pst_precioBase}
            </Text>
          ) : (
            <ModalNewPost variant="primary" width="" icon mypost={post} />
          )}
        </Flex>
      </Box>

      <Box px="2" pb="5">
        <Flex align="flex-start" justify="center" direction="column">
          {/* <Flex align="center" justify="space-between" w="full" p="3">
            <Flex align="center" w="40px" justify="space-between">
              <ZIcon name="star" />
              <Text fontSize="sm" className={styles.bold200} color="primary">
                4.0
              </Text>
            </Flex>
            {categoryScreen ? (
              <Text fontSize="sm" className={styles.bold200} color="primary">
                S/. {post?.pst_precioBase}
              </Text>
            ) : (
              <ModalNewPost variant="primary" width="sm" icon />
            )}
          </Flex> */}
          <Flex align="center" justify="flex-start">
            <Text fontSize="md" className={styles.bold500} color="primary">
              {post?.pst_nombre}
            </Text>
          </Flex>
          {categoryScreen && (
            <Flex align="center" justify="flex-start">
              <Text fontSize="sm" className={styles.bold200} color="primary">
                Por {post.pstUsuarioId.us_nombre}
                {post.pstUsuarioId.us_apellido}
              </Text>
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  )
}
