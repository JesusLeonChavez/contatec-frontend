import styles from "../../styles/sections/Show.module.css"
import { Box, Text, Flex } from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"

export default function Show() {
  return (
    <div>
      <Text color="primary" className={styles.labelPrincipal}>
        Historial
      </Text>
      <p color="primary" className={styles.labelsub}>
        Puedes ver tu lista de pendientes de pago aquí.
      </p>
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
              ID: 1515151
            </Text>
            <Text size="md" align="start">
              Monto: s/2000
            </Text>
          </Box>
          <Flex align="center" justify="space-between" w="50px">
            <ZIcon name="search" pointer size={20} />
            <ZIcon name="dowload" pointer size={20} />
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
              ID: 1515151
            </Text>
            <Text size="md" align="start">
              Monto: s/2000
            </Text>
          </Box>
          <Flex align="center" justify="space-between" w="50px">
            <ZIcon name="search" pointer size={20} />
            <ZIcon name="dowload" pointer size={20} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}
