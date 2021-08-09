import styles from "../../styles/sections/Show.module.css"
import { Box, Text, Flex } from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"
import ModalDowload from "../ShowData/ModalDowload"

export default function Show() {
  return (
    <div>
      <Text color="primary" className={styles.mainLabel}>
        Pagos
      </Text>
      <Text color="primary" align="start" fontWeight="medium" pb="4">
        Puedes revisar tu lista de pagos y sus estado aquí.
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
              Servicio: Marketing para redes
            </Text>
            <Text size="md" align="start">
              Monto: S/ 2000
            </Text>
          </Box>
          <Flex align="center" justify="space-between" w="80px">
            <ZIcon name="search" pointer size={20} />
            <ModalDowload variant="" width="" showModalButtonText="" />
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
              Servicio: SEO SEM
            </Text>
            <Text size="md" align="start">
              Monto: S/ 3000
            </Text>
          </Box>
          <Flex align="center" justify="space-between" w="80px">
            <ZIcon name="search" pointer size={20} />
            <ModalDowload variant="" width="" showModalButtonText="" />
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}
