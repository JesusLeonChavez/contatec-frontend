import styles from "../../styles/sections/Show.module.css"
import { Box, Text, Button, Flex } from "@chakra-ui/react"

export default function Show() {
  return (
    <div>
      <Text color="primary" className={styles.mainLabel}>
        Realizar Pago
      </Text>
      <Text color="primary" align="start" fontWeight="medium" pb="4">
        Puedes revisar tu lista de pendientes de pago aquí.
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
              Monto: S/ 2000
            </Text>
          </Box>
          <Flex align="center" justify="space-between" w="100px">
            <Button variant="primary" p={4} color="white">
              Pagar
            </Button>
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
              Nombre del servicio: Desarrollo web
            </Text>
            <Text size="md" align="start">
              Monto: S/ 2000
            </Text>
          </Box>
          <Flex align="center" justify="space-between" w="100px">
            <Button variant="primary" p={4} color="white">
              Pagar
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}
