import styles from "../styles/components/NeedToLogin.module.css"
import { Grid, Box, Text } from "@chakra-ui/react"

export default function NeedToLgin() {
  return (
    <Grid aling="center">
      <Box m="auto">
        <div className={styles.ldsCircle}></div>
      </Box>
      <Text fontSize="25px" color="primary">
        Necesita Iniciar Sesión
      </Text>
    </Grid>
  )
}
