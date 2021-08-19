// eslint-disable-next-line import/no-unresolved
import styles from "../styles/components/Loading.module.css"
import { Grid, Text, Box } from "@chakra-ui/react"

export default function Loading({ content }) {
  return (
    <Grid aling="center">
      <Box m="auto">
        <div className={styles.ldsHourglass}></div>
      </Box>
      <Box>
        <Text fontSize="15px" color="primary" aling="center">
          {content}
        </Text>
      </Box>
    </Grid>
  )
}
