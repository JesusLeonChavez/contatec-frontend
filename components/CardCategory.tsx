/* eslint-disable camelcase */
import { Box, Text, Flex, Button } from "@chakra-ui/react"
import ZIcon from "../components/Icon/ZIcon"

import styles from "../styles/sections/Home.module.css"
import Image from "next/image"
import ModalNewPost from "../sections/Post/ModalNewPost"
import { del, setAuth } from "../utils/http"
import { useContext, useState } from "react"
import { DataContext } from "../store/GlobalState"
import Dialog from "./Dialog"
import { toCapitalFirstLetter } from "../utils/toCapital"
import ProgressDialog from "./ProgressDialog"

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
  const { state, dispatch } = useContext(DataContext)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { auth } = state
  const [openDialog, setOpenDialog] = useState(false)
  const [openProgress, setOpenProgress] = useState(false)
  const handleDeletePost = async result => {
    setOpenDialog(true)
    if (result === true) {
      console.log("result: ", result)
      setOpenDialog(false)
      setOpenProgress(true)
      setAuth(auth!.access_token)
      const res = await del(`/api/post/delete/${post.id}`)
      dispatch({ type: "DELETE_POST", payload: post.id })
      console.log("delete: ", res)
      // TODO: hacer que la actualizacion de los post sea por disptach en auth
      setOpenProgress(false)
    } else if (result === false) {
      setOpenDialog(false)
    }
  }
  return (
    <Box borderRadius="lg" overflow="hidden" mx="3">
      <Box position="relative">
        <Image
          src={post?.pst_imagen_1 || "/assets/images/marketing/marketing1.png"}
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
            <div>
              <ModalNewPost
                variant="light"
                width=""
                icon
                mypost={post}
                backgroundColor="gray.200"
              />
              <Button
                variant="light"
                width=""
                backgroundColor="gray.200"
                mx={1}
                onClick={handleDeletePost}
              >
                <ZIcon name="trash" color="primary" size={20} />
              </Button>
            </div>
          )}
        </Flex>
      </Box>

      <Box px="2" pb="5">
        <Flex align="flex-start" justify="center" direction="column">
          <Flex align="center" justify="flex-start">
            <Text fontSize="md" className={styles.bold500} color="primary">
              {toCapitalFirstLetter(post.pst_nombre)}
            </Text>
          </Flex>
          {categoryScreen && (
            <Flex align="center" justify="flex-start">
              <Text fontSize="sm" className={styles.bold200} color="primary">
                Por {post.pstUsuarioId.us_nombre}{" "}
                {post.pstUsuarioId.us_apellido}
              </Text>
            </Flex>
          )}
        </Flex>
      </Box>
      {openDialog && (
        <Dialog
          title="Eliminar categoría"
          content={
            <>
              Esta seguro que quiere eliminar{" "}
              <b>{toCapitalFirstLetter(post.pst_nombre)}</b>
            </>
          }
          callbackFunction={handleDeletePost}
          icon="trash"
          color="danger"
        />
      )}
      {openProgress && <ProgressDialog content="Eliminando ..." />}
    </Box>
  )
}
