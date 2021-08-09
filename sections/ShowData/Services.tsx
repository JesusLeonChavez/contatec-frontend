import styles from "../../styles/sections/Show.module.css"
import { Box, Text, Flex } from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"

export default function Show() {
  return (
    <div>
      <Text color="primary" className={styles.mainLabel}>
        Servicios
      </Text>
      <Text color="primary" align="start" fontWeight="medium" pb="4">
        Puedes ver tu lista de servicios con puntuaciones y alcance aquí
      </Text>
      <Flex justify="start" direction="column">
        <Flex
          backgroundColor="gray.200"
          padding="4"
          marginBottom="20px"
          justifyContent="space-between"
          w="80%"
        >
          <Box>
            <Text size="md" align="start">
              Nombre del servicio: Marketing digital
            </Text>
            <Text size="md" align="start">
              Alcance: 1200 usuarios
            </Text>
          </Box>
          <Flex align="center" justify="space-between" w="50px">
            <Text fontSize="xl">4.1</Text>
            <ZIcon name="star" color="secondary" size={20} />
          </Flex>
        </Flex>
        <Flex
          backgroundColor="gray.200"
          padding="4"
          marginBottom="20px"
          justifyContent="space-between"
          w="80%"
        >
          <Box>
            <Text size="md" align="start">
              Nombre del servicio: SEO SEM
            </Text>
            <Text size="md" align="start">
              Alcance: 900 usuarios
            </Text>
          </Box>
          <Flex align="center" justify="space-between" w="50px">
            <Text fontSize="xl">3.8</Text>
            <ZIcon name="star" color="secondary" size={20} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}
