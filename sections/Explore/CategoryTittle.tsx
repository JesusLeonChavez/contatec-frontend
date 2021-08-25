import { Box, Flex, Text, Button, Grid } from "@chakra-ui/react"
import Link from "next/link"
export default function CategoryTittle({ categories }) {
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
            Elige una categoría
          </Text>
        </Flex>
        <Grid
          gap="2"
          py="5"
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(4, 1fr)",
            xl: "repeat(8, 1fr)"
          }}
        >
          {categories.map(category => (
            <Link
              key={category.id}
              href="/explorar/[categoryid]"
              as={`/explorar/${category.id}`}
            >
              <a>
                <Button variant="third" fontSize="xs" isFullWidth>
                  {category.cat_nombre}
                </Button>
              </a>
            </Link>
          ))}
        </Grid>
      </div>
    </Box>
  )
}
