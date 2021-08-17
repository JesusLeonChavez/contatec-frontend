import { FormControl, Grid, Text } from "@chakra-ui/react"
import * as React from "react"

type Props = {
  boucher: Record<any, string>
}
class PrintView extends React.PureComponent<Props> {
  render() {
    return (
      <div>
        <Text
          align="center"
          color="primary"
          py="6"
          fontSize="3xl"
          fontWeight="bold"
          my="10"
        >
          Comprobante {this.props.boucher.number}
        </Text>
        <Grid
          templateColumns="repeat(2,1fr)"
          gap="6"
          align="center"
          justify="center"
        >
          <FormControl mb="2">
            <Text fontSize="lg" color="primary" fontWeight="medium">
              Nombre del servicio:
            </Text>

            <Text fontSize="md" color="letter" fontWeight="light">
              Marketing para redes
            </Text>
          </FormControl>

          <FormControl mb="2">
            <Text fontSize="lg" color="primary" fontWeight="medium">
              Nombre del proyecto:
            </Text>
            <Text fontSize="md" color="letter" fontWeight="light">
              Marketea tu dia
            </Text>
          </FormControl>

          <FormControl mb="2">
            <Text fontSize="lg" color="primary" fontWeight="medium">
              Presupuesto:
            </Text>
            <Text fontSize="md" color="letter" fontWeight="light">
              s/ 2000
            </Text>
          </FormControl>

          <FormControl mb="2">
            <Text fontSize="lg" color="primary" fontWeight="medium">
              Cuenta total:
            </Text>
            <Text fontSize="md" color="letter" fontWeight="light">
              s/ 2500
            </Text>
          </FormControl>

          <FormControl mb="2">
            <Text fontSize="lg" color="primary" fontWeight="medium">
              Fecha de inicio:
            </Text>
            <Text fontSize="md" color="letter" fontWeight="light">
              11-10-21
            </Text>
          </FormControl>

          <FormControl mb="2">
            <Text fontSize="lg" color="primary" fontWeight="medium">
              Fecha final:
            </Text>
            <Text fontSize="md" color="letter" fontWeight="light">
              11-11-21
            </Text>
          </FormControl>

          <FormControl mb="2">
            <Text fontSize="lg" color="primary" fontWeight="medium">
              Cliente:
            </Text>
            <Text fontSize="md" color="letter" fontWeight="light">
              Varyana León
            </Text>
          </FormControl>

          <FormControl mb="2">
            <Text fontSize="lg" color="primary" fontWeight="medium">
              Trabajador:
            </Text>
            <Text fontSize="md" color="letter" fontWeight="light">
              Leónidas León
            </Text>
          </FormControl>
        </Grid>
      </div>
    )
  }
}

export default PrintView
