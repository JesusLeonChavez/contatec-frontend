import { Text, Grid, Flex, Circle } from "@chakra-ui/react"
import Image from "next/image"
import styles from "../../styles/sections/Home.module.css"
import ZIcon from "../../components/Icon/ZIcon"
export default function OurCategories() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoRowNoInvert}>
          <Flex align="center" justify="center" py={10}>
            <Grid templateColumns="repeat(1, 1fr)" gap={12} w={500}>
              <Text fontSize="5xl" className={styles.bold600}>
                Nuestras categorías
              </Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={12}>
                <Flex align="center">
                  <Circle w="45px" h="45px" bg="circleicons">
                    <ZIcon name="border" color="primary" />
                  </Circle>
                  <Text fontSize="md" className={styles.ml3}>
                    Marketing digital
                  </Text>
                </Flex>
                <Flex align="center">
                  <Circle w="45px" h="45px" bg="circleicons">
                    <ZIcon name="border" color="primary" />
                  </Circle>
                  <Text fontSize="md" className={styles.ml3}>
                    Datos
                  </Text>
                </Flex>
                <Flex align="center">
                  <Circle w="45px" h="45px" bg="circleicons">
                    <ZIcon name="energy" color="primary" />
                  </Circle>
                  <Text fontSize="md" className={styles.ml3}>
                    Negocios
                  </Text>
                </Flex>
                <Flex align="center">
                  <Circle w="45px" h="45px" bg="circleicons">
                    <ZIcon name="energy" color="primary" />
                  </Circle>
                  <Text fontSize="md" className={styles.ml3}>
                    Diseño gráfico
                  </Text>
                </Flex>
                <Flex align="center">
                  <Circle w="45px" h="45px" bg="circleicons">
                    <ZIcon name="border" color="primary" />
                  </Circle>
                  <Text fontSize="md" className={styles.ml3}>
                    Programación
                  </Text>
                </Flex>
                <Flex align="center">
                  <Circle w="45px" h="45px" bg="circleicons">
                    <ZIcon name="border" color="primary" />
                  </Circle>
                  <Text fontSize="md" className={styles.ml3}>
                    Desarrollo web
                  </Text>
                </Flex>
              </Grid>
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
