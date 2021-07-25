import { Text, Grid, Flex } from "@chakra-ui/react"

import Image from "next/image"

import React, { useContext } from "react"
import { DataContext } from "../../store/GlobalState"

import styles from "../../styles/sections/Post.module.css"
import ModalNewPost from "./ModalNewPost"
import MyPosts from "./MyPosts"

export default function NewListPost() {
  const { state } = useContext(DataContext)
  const { auth } = state
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoWrapper}>
        <div className={styles.newPostRow}>
          <Flex align="center" justify="center" py={100}>
            <Grid
              templateColumns="repeat(1, 1fr)"
              gap={8}
              w={{ base: "full", md: 500 }}
            >
              <Text
                fontSize="5xl"
                className="bold600"
                color="primary"
                align="center"
              >
                ¡Hola {auth!.user.us_nombre}!
              </Text>

              <Text fontSize="xl" align="center">
                Anímate hoy a publicar y llega a más clientes de manera online
              </Text>

              <Flex justify="center">
                <ModalNewPost
                  variant="primary"
                  width="3xs"
                  showModalButtonText="Publicar ahora"
                />
              </Flex>
            </Grid>
          </Flex>

          <Flex
            align="center"
            justify="center"
            py={10}
            display={{ base: "none", md: "block" }}
          >
            <Image
              src="/assets/nuevo_post.png"
              alt="OurCategories"
              width={800}
              height={500}
            />
          </Flex>
        </div>
        <MyPosts posts={auth?.user.posts} />
      </div>
    </div>
  )
}
