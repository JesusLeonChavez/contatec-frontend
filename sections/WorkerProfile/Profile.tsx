import { Text, Box, Button, Grid } from "@chakra-ui/react"
import Statistics from "../WorkerProfile/Statistics"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from "swiper/core"
// import SwiperCore, { Autoplay, Navigation } from "swiper/core"
// import styles from "../../styles/sections/Home.module.css"
import Card from "../../components/Card"
SwiperCore.use([Autoplay, Navigation])

export default function Profile() {
  const data = [
    {
      title: "Marketing de contenido",
      price: "300",
      img: "/assets/marketing/marketing1.png"
    },
    {
      title: "Estrategia de marketing",
      price: "200",
      img: "/assets/marketing/marketing2.png"
    },
    {
      title: "Marketing de contenido",
      price: "300",
      img: "/assets/marketing/marketing4.png"
    }
  ]

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
          >
            Contactar
          </Button>
          <Text>En contatec desde Julio, 2021</Text>
        </Box>

        <Box w="100%">
          <Statistics />
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
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Card title={item.title} price={item.price} img={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Grid>
    </div>
  )
}
