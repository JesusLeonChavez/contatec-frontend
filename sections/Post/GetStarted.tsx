import { Text, Grid, Flex, Button } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import styles from "../../styles/sections/Post.module.css"

export default function OurCategories() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoRowNoInvert}>
          <Flex align="center" justify="center" py={100}>
            <Grid templateColumns="repeat(1, 1fr)" gap={8} w={500}>
              <Text fontSize="5xl" className="bold600">
                ¡Empieza a publicar hoy!
              </Text>
              <Text fontSize="xl">
                Son mas de 2000 personas registradas que como tú ya han
                publicado su servicio y se encuentran laborando. ¡Qué esperas
                para unirte y publicar hoy tu primer anuncio!
              </Text>
              <Button variant="primary" w="3xs">
                Publicar
              </Button>
            </Grid>
          </Flex>
          <Flex align="center" justify="center" py={10}>
            <Image
              src="/assets/OurCategories.png"
              alt="OurCategories"
              width={500}
              height={500}
            />
          </Flex>
        </div>
      </div>
    </div>
  )
}
