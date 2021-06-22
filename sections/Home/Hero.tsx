import {
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Flex
} from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from "swiper/core"
import styles from "../../styles/sections/Home.module.css"
import ZIcon from "../../components/Icon/ZIcon"
import Image from "next/image"
SwiperCore.use([Autoplay, Navigation])
export default function Hero() {
  return (
    <div className={styles.containerHero}>
      <section className={styles.blankSection}>
        <div className={styles.infoHero}>
          <Text fontSize="smaller" color="#525252">
            TRABAJO
          </Text>
          <Text
            fontSize="6xl"
            className={styles.heroMainMessage}
            color="primary"
          >
            Decubre hoy el mejor servicio para tu negocio
          </Text>
          <div>
            <div>
              <FormControl id="text">
                <FormLabel>Busca el tema de tu interés</FormLabel>
                <Flex>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      // eslint-disable-next-line react/no-children-prop
                      children={<ZIcon name="search" />}
                    />
                    <Input
                      type="text"
                      placeholder="P. ej: Desarrollo web"
                      bg="white"
                    />
                  </InputGroup>
                  <Button w={{ md: "3xs" }} variant="primary">
                    Buscar
                  </Button>
                </Flex>
              </FormControl>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.swiperSection}>
        <Swiper
          slidesPerView={1}
          navigation
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
        >
          <SwiperSlide className="slide-2">
            <Image
              src="/assets/slides/slide1.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/slides/slide2.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/slides/slide3.png"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
          ...
        </Swiper>
      </section>
    </div>
  )
}
