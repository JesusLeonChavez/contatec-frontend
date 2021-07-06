import styles from "../../styles/sections/Show.module.css"
import { Box, Text, Button, Flex, Spacer, FormControl } from "@chakra-ui/react"

export default function Show() {
  return (
    <div>
      <Text color="primary" className={styles.labelPrincipal}>
        Realizar Pago
      </Text>
      <p color="primary" className={styles.labelsub}>
        Puedes revisar tu lista de pendientes de pago aquí.
      </p>
      <FormControl>
        <Flex backgroundColor="gray.200" padding="2" marginBottom="20px">
          <Box p="2">
            <Text size="md">Nombre del servicio:</Text>
            <Text size="md">Monto:</Text>
          </Box>
          <Spacer />
          <Box>
            <Button variant="primary" p={4} color="white" mr="4" my="4">
              Pagar
            </Button>
          </Box>
        </Flex>

        <Flex backgroundColor="gray.200" padding="2" marginBottom="20px">
          <Box p="2">
            <Text size="md">Nombre del servicio:</Text>
            <Text size="md">Monto:</Text>
          </Box>
          <Spacer />
          <Box>
            <Button bg="primary" p={4} color="white" mr="4" my="4">
              Pagar
            </Button>
          </Box>
        </Flex>
      </FormControl>
    </div>
  )
}
