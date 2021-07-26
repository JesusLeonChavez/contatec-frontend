import { Box, Grid, Text } from "@chakra-ui/react"
// import Link from "next/link"
import CardCategory from "../../../components/CardCategory"

export default function CategoryItems({ category }) {
  return (
    <Box py={{ base: "1", md: "8" }}>
      <div
        className="generalWrapper"
        style={{ minHeight: "calc(100vh - 300px)" }}
      >
        {category.posts.length === 0 ? (
          <Box
            d="flex"
            alignItems="center"
            justifyContent="center"
            w="full"
            h="xl"
          >
            {/* TODO: Agregar imagen */}
            <Text>No se encontraron registros para esta categoria</Text>
          </Box>
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)"
            }}
          >
            {category.posts.map(post => (
              <CardCategory
                key={post.id}
                post={post}
                categoryid={category.id}
              />
            ))}
          </Grid>
        )}
      </div>
    </Box>
  )
}
