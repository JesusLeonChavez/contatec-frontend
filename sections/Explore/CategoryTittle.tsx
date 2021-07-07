import { Box, Flex, Text, Button, Grid } from "@chakra-ui/react"
import Link from "next/link"
export default function CategoryTittle() {
  return (
    <Box>
      <div className="generalWrapper">
        <Flex align="center" justify="center" py="5">
          <Text
            fontSize="5xl"
            className="bold600"
            align="center"
            color="primary"
          >
            Elige una catogoría
          </Text>
        </Flex>
        <Grid
          gap="10"
          py="5"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)"
          }}
        >
          <Link href="/explorar/[categoryid]" as={`/explorar/marketing`}>
            <a>
              <Button variant="third" isFullWidth>
                Marketing
              </Button>
            </a>
          </Link>
          <Link href="/explorar/[categoryid]" as={`/explorar/desarrollo_web`}>
            <a>
              <Button variant="third" isFullWidth>
                Desarrollo web
              </Button>
            </a>
          </Link>
          <Link href="/explorar/[categoryid]" as={`/explorar/programacion`}>
            <a>
              <Button variant="third" isFullWidth>
                Programación
              </Button>
            </a>
          </Link>
          <Link href="/explorar/[categoryid]" as={`/explorar/negocios`}>
            <a>
              <Button variant="third" isFullWidth>
                Negocios
              </Button>
            </a>
          </Link>
          <Link href="/explorar/[categoryid]" as={`/explorar/datos`}>
            <a>
              <Button variant="third" isFullWidth>
                Datos
              </Button>
            </a>
          </Link>
          <Link href="/explorar/[categoryid]" as={`/explorar/diseno_grafico`}>
            <a>
              <Button variant="third" isFullWidth>
                Diseño gráfico
              </Button>
            </a>
          </Link>
        </Grid>
      </div>
    </Box>
  )
}
