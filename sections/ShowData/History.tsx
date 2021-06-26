import styles from "../../styles/sections/Show.module.css"
import { Box, Text, Flex, Spacer, Link } from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"

export default function Show() {
  return (
    <div>
      <Text className={styles.labelPrincipal}>Historial</Text>
      <p className={styles.labelsub}>
        Puedes ver tu lista de pendientes de pago aquí.
      </p>
      <div>
        <Flex backgroundColor="gray.200" padding="2" marginBottom="20px">
          <Box p="2">
            <Text size="md">ID:</Text>
            <Text size="md">Monto:</Text>
          </Box>
          <Spacer />
          <Box flex="">
            <Link>
              <ZIcon name="search" />
            </Link>
            <Link>
              <ZIcon name="dowload" />
            </Link>
          </Box>
        </Flex>

        <Flex backgroundColor="gray.200" padding="2" marginBottom="20px">
          <Box p="2">
            <Text size="md">ID:</Text>
            <Text size="md">Monto:</Text>
          </Box>
          <Spacer />
          <Box>
            <Link>
              <ZIcon name="search" />
            </Link>
            <Link>
              <ZIcon name="dowload" />
            </Link>
          </Box>
        </Flex>
      </div>
    </div>
  )
}
