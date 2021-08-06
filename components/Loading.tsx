import styles from "../styles/components/Loading.module.css"
import { Text, Box } from "@chakra-ui/react"

export default function Loading({ content }) {
  return (
    <div>
      <div className={styles.ldsHourglass}></div>
      <Box>
        <Text fontSize="15px" color="primary" aling="center">
          {content}
        </Text>
      </Box>
    </div>
  )
}
