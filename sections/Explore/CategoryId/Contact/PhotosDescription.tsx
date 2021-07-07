import {
  Box,
  Flex,
  Text,
  Button,
  Grid,
  UnorderedList,
  ListItem
} from "@chakra-ui/react"
import { useState } from "react"
import ZIcon from "../../../../components/Icon/ZIcon"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Thumbs } from "swiper/core"
import QuotePrice from "./QuotePrice"
SwiperCore.use([Navigation, Thumbs])
export default function CategoryTittle({ category }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <Box py="6">
      <div className="generalWrapper">
        <Grid templateColumns={{ base: "100%", lg: "70% 30%" }}>
          <Box>
            <Flex align="center" justify="space-between">
              <Grid templateColumns="repeat(2, 1fr)" gap="2">
                <Button variant="fourth">{category}</Button>
                <Flex align="center">
                  <ZIcon name="star" color="secondary" />
                  <Text>4.0 (2000)</Text>
                </Flex>
              </Grid>
              <Text>Publicado el 14/2021</Text>
            </Flex>
            <Box my="4">
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiperBig"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
              </Swiper>
              <Swiper
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={3}
                freeMode={true}
                watchSlidesVisibility={true}
                watchSlidesProgress={true}
                className="mySwiperSmall"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
              </Swiper>
            </Box>
          </Box>
          <Flex align="center" justify="center" px="3" my="2">
            <Box boxShadow="0px 1px 4px rgba(0, 0, 0, 0.4)" px="6" py="6">
              <Grid templateColumns="repeat(1, 1fr)" gap="5">
                <Text className="bold600" fontSize="lg" color="primary">
                  Description
                </Text>
                <Text>
                  Explorar tu creatividad con nuevas técnica en redes y mejora
                  el alcance a tu público objetivo.
                </Text>
                <Text>
                  Explorar tu creatividad con nuevas técnica en redes y mejora
                  el alcance a tu público objetivo.
                </Text>
                <UnorderedList spacing={3} px="3">
                  <ListItem>Marketing</ListItem>
                  <ListItem>Diseño</ListItem>
                  <ListItem>Marketing</ListItem>
                  <ListItem>Diseño</ListItem>
                  <ListItem>Marketing</ListItem>
                  <ListItem>Diseño</ListItem>
                </UnorderedList>
                <Text>Presupuesto</Text>
                <UnorderedList spacing={3} px="3">
                  <ListItem>Desde s/.200 o $45</ListItem>
                </UnorderedList>
                <QuotePrice
                  variant="third"
                  width="full"
                  showModalButtonText="Cotizar servicio"
                />
              </Grid>
            </Box>
          </Flex>
        </Grid>
      </div>
    </Box>
  )
}
