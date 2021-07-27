/* istanbul ignore file */
import { Flex, Grid, Text } from "@chakra-ui/react"
import CardCategory from "../../components/CardCategory"

export default function MyPosts({ posts }) {
  return (
    <>
      <Text fontSize="3xl" color="primary" fontWeight="bold" py="3">
        Mis publicaciones
      </Text>

      {posts.length === 0 ? (
        <Flex align="center" justify="center">
          <Text fontSize="lg" py="5">
            Usted no ha realizado ninguna publicación
          </Text>
        </Flex>
      ) : (
        <Grid
          justify="space-evenly"
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)"
          }}
        >
          {posts?.map(post => (
            // <Link
            //   key={post.id}
            //   href="/explorar/[categoryid]/[categoryitemid]"
            //   as={`/explorar/${post.pstCategoriaId.id}/${post.id}`}
            // >
            //   <a>
            <CardCategory key={post.id} post={post} categoryScreen={false} />
          ))}
        </Grid>
      )}
    </>
  )
}
