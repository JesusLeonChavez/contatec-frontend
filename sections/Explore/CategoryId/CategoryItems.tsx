import { Box, Grid, Text } from "@chakra-ui/react"
import Link from "next/link"
import CardCategory from "../../../components/CardCategory"

export default function CategoryItems({ category }) {
  return (
    <Box py={{ base: "1", md: "8" }}>
      <div className="generalWrapper">
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
            {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
            <Link
              key={item}
              href="/explorar/[categoryid]/[categoryitemid]"
              as={`/explorar/${category}/item${item}`}
            >
              <a>
                <CardCategory
                  title="Marketing digital en category"
                  imageUrl="/assets/marketing/marketing1.png"
                />
              </a>
            </Link>
          ))} */}
            {category.posts.map(post => (
              <Link
                key={post.id}
                href="/explorar/[categoryid]/[categoryitemid]"
                as={`/explorar/${category.id}/${post.id}`}
              >
                <a>
                  <CardCategory
                    title="Marketing digital en category"
                    imageUrl="/assets/marketing/marketing1.png"
                  />
                </a>
              </Link>
            ))}
          </Grid>
        )}
      </div>
    </Box>
  )
}
