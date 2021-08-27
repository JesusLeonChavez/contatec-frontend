import { Text, Box, Button, Grid } from "@chakra-ui/react"
import Statistics from "../WorkerProfile/Statistics"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from "swiper/core"
import CardCategory from "../../components/CardCategory"
import { useRouter } from "next/router"
SwiperCore.use([Autoplay, Navigation])

export default function Profile({ worker }) {
  const router = useRouter()
  return (
    <div className="generalWrapper" style={{ padding: "50px 10px" }}>
      <Grid templateColumns="30% 70%" overflowY="hidden">
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Button
            variant="primary"
            w="150px"
            pl="15"
            mb="10"
            ml="25"
            type="submit"
            className="buttonDisabledPrimary"
            onClick={() => {
              router.push("/explorar")
            }}
          >
            Explorar
          </Button>
          <Text>
            En contatec desde{" "}
            {format(new Date(worker.createdAt), "MMMM yyyy", { locale: es })}
          </Text>
        </Box>

        <Box>
          <Statistics worker={worker} />
        </Box>
      </Grid>
      {worker.posts.length <= 4 && (
        <Grid templateColumns="repeat(4,1fr)">
          {worker.posts.map((post, index) => (
            <CardCategory
              key={post.id}
              post={post}
              categoryid={post.pstCategoriaId.id}
            />
          ))}
        </Grid>
      )}
      {worker.posts.length > 4 && (
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          navigation
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          breakpoints={{
            // when window width is >= 640px
            100: {
              slidesPerView: 1
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2
            },
            1000: {
              slidesPerView: 4
            }
          }}
          className="mySwiperTab"
        >
          {worker.posts.map((post, index) => (
            <SwiperSlide key={index}>
              <CardCategory
                key={post.id}
                post={post}
                categoryid={post.pstCategoriaId.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}
