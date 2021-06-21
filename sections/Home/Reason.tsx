import { Text, Grid, Flex, Circle } from "@chakra-ui/react"
import Image from "next/image"
import styles from "../../styles/sections/Home.module.css"
import ZIcon from "../../components/Icon/ZIcon"

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
              src="/assets/Reason.png"
              alt="Reason"
              width={500}
              height={500}
            />
          </Flex>

          <Flex align="center" justify="center" py={10}>
            <Grid templateColumns="repeat(1, 1fr)" gap={6} w={500}>
              <Text fontSize="5xl" className={styles.bold600}>
                ¿Por qué utilizar la plataforma?
              </Text>

              <Text fontSize="md">
                Contactamos clientes con profesionales para garantizar el éxito
                de un proyecto
              </Text>

              <Text fontSize="md" className={styles.bold500}>
                Beneficios
              </Text>

              <Grid templateColumns="repeat(1, 1fr)" gap={3}>
                <Flex align="center">
                  <Circle w="45px" h="45px" bg="circleicons">
                    <ZIcon name="border" color="primary" />
                  </Circle>

                  <Text fontSize="md" className={styles.ml3}>
                    Visualizacion de cosas
                  </Text>
                </Flex>

                <Flex align="center">
                  <Circle w="45px" h="45px" bg="circleicons">
                    <ZIcon name="energy" color="primary" />
                  </Circle>

                  <Text fontSize="md" className={styles.ml3}>
                    Chat en vivo
                  </Text>
                </Flex>

                <Flex align="center">
                  <Circle w="45px" h="45px" bg="circleicons">
                    <ZIcon name="border" color="primary" />
                  </Circle>

                  <Text fontSize="md" className={styles.ml3}>
                    Pago por servicio de calidad
                  </Text>
                </Flex>

                <Flex align="center">
                  <Circle w="45px" h="45px" bg="circleicons">
                    <ZIcon name="energy" color="primary" />
                  </Circle>

                  <Text fontSize="md" className={styles.ml3}>
                    Monitoreo del servicio
                  </Text>
                </Flex>
              </Grid>
            </Grid>
          </Flex>
        </div>
      </div>
    </div>
  )
}
