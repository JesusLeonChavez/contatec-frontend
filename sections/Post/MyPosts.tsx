import { Grid, Text } from "@chakra-ui/react"
import CardCategory from "../../components/CardCategory"

export default function MyPosts({ posts }) {
  return (
    <>
      <Text fontSize="3xl" color="primary" fontWeight="bold" py="3">
        Mis publicaciones
      </Text>
      <Grid
        justify="space-evenly"
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)"
        }}
      >
        {posts.map(post => (
          <CardCategory key={post.id} post={post} categoryScreen={false} />
        ))}
      </Grid>
    </>
  )
}
