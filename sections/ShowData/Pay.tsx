import styles from "../../styles/sections/Show.module.css"
import { Box, Text, Flex, Button } from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"
import ModalDowload from "../ShowData/ModalDowload"
import React from "react"
import ModalSteper from "./ModalSteper"

function PayCard() {
  return (
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
      <Flex align="center" justify="space-around" w="180px">
        <Button variant="primary">Pagar</Button>
        <ModalSteper />
        <ModalDowload />
      </Flex>
    </Flex>
  )
}

export default function Pay() {
  return (
    <div>
      <Text color="primary" className={styles.mainLabel}>
        Pagos
      </Text>
      <Text color="primary" align="start" fontWeight="medium" pb="4">
        Puedes revisar tu lista de pagos y sus estado aquí.
      </Text>
      <Box overflowY="scroll" h="250px">
        <Flex justify="start" direction="column">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <PayCard key={index} />
          ))}
        </Flex>
      </Box>
    </div>
  )
}
