import { Text, Grid, Flex, Button } from "@chakra-ui/react"
import Image from "next/image"
import styles from "../../styles/sections/Home.module.css"

export default function OurCategories() {
  return (
    <div className={styles.infoContainer}>
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
              <Button w="3xs" variant="secondary">
                Registrarse
              </Button>
            </Grid>
          </Flex>
        </div>
      </div>
    </div>
  )
}
