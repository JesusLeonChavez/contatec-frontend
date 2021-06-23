import {
  Text,
  Flex
  // Tabs,
  // TabList,
  // TabPanels,
  // Tab,
  // TabPanel
} from "@chakra-ui/react"
import ZIcon from "../../components/Icon/ZIcon"
import styles from "../../styles/sections/Post.module.css"

export default function ActiveMessage() {
  return (
    <div
      className={styles.infoContainer}
      style={{ backgroundColor: "var(--secondary)" }}
    >
      <div className={styles.infoWrapper}>
        <Flex direction="column" align="center" justify="center">
          <ZIcon name="logo" color="primary" size="40" />
          <Text fontSize="6xl" align="center" color="primary">
            Porfavor revise su correo electrónico para verificarlo
          </Text>
        </Flex>
      </div>
    </div>
  )
}
