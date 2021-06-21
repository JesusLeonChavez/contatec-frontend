import { Text, Grid, Flex } from "@chakra-ui/react"
import Image from "next/image"
import React from "react"
import styles from "../../styles/sections/Home.module.css"
import Register from "./Register"

export default function OurCategories() {
  return (
    <div
      className={styles.infoContainer}
      style={{ backgroundColor: "var(--secondary)" }}
    >
      <div className={styles.infoWrapper}>
        <div className={styles.infoRowInvert}>
          <Flex align="center" justify="center" py={10}>
            <Image
              src="/assets/JoinUs.png"
              alt="OurCategories"
              width={600}
              height={500}
            />
          </Flex>
          <Flex align="center" justify="center" py={10}>
            <Grid templateColumns="repeat(1, 1fr)" gap={8} w={500}>
              <Text fontSize="md" color="gray">
                COMUNIDAD
              </Text>
              <Text fontSize="5xl" className={styles.bold600}>
                ¡Únete a nuestra comunidad y empieza el cambio!
              </Text>
              <Register
                variant="primary"
                width="3xs"
                showModalButtonText="Registrate"
              />
            </Grid>
          </Flex>
        </div>
      </div>
    </div>
  )
}
