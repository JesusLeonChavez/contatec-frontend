import { Box, Flex, Text, Grid } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from "swiper/core"
import CardCategory from "../../components/CardCategory"
SwiperCore.use([Autoplay, Navigation])

export default function InterestedService({ interesting }) {
  return (
    <Box py={{ base: "1", md: "20px" }}>
      <div className="generalWrapper">
        <Flex align="center" justify="flex-start" py="2">
          <Text fontSize="3xl" className="bold500" color="primary">
            Servicios que te pueden interesar
          </Text>
        </Flex>
        {interesting.length <= 3 && interesting.length > 0 && (
          <Grid templateColumns="repeat(4, 1fr)">
            {interesting.map((post, index) => (
              <CardCategory
                key={post.id}
                post={post}
                categoryid={post.pstCategoriaId.id}
              />
            ))}
          </Grid>
        )}
        {interesting.length > 3 ? (
          <Swiper
            slidesPerView={4}
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
            {interesting.map((post, index) => (
              <SwiperSlide key={index}>
                <CardCategory
                  key={post.id}
                  post={post}
                  categoryid={post.pstCategoriaId.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No hay servicios interesantes para ti</p>
        )}
      </div>
    </Box>
  )
}
