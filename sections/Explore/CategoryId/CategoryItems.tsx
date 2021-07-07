import { Box, Grid } from "@chakra-ui/react"
import Link from "next/link"
import CardCategory from "../../../components/CardCategory"

export default function CategoryItems({ category }) {
  return (
    <Box py={{ base: "1", md: "8" }}>
      <div className="generalWrapper">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)"
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(item => (
            <Link
              key={item}
              href="/explorar/[categoryid]/[categoryitemid]"
              as={`/explorar/${category}/item${item}`}
            >
              <a>
                <CardCategory title="Marketing digital en category" />
              </a>
            </Link>
          ))}
        </Grid>
      </div>
    </Box>
  )
}
