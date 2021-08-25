import { Text } from "@chakra-ui/react"
import algoliasearch from "algoliasearch/lite"
import Image from "next/image"
import { InstantSearch } from "react-instantsearch-dom"
import SwiperCore, { Autoplay, Navigation } from "swiper/core"
import { Swiper, SwiperSlide } from "swiper/react"
import { CustomAutocomplete } from "../../components/AutoComplete"
import styles from "../../styles/sections/Home.module.css"

SwiperCore.use([Autoplay, Navigation])

const searchClient = algoliasearch(
  "0NFYRQ1V2T",
  "faca7db58b1efd435cccac7fcba685b8"
)

export default function Hero() {
  return (
    <div className={styles.containerHero}>
      <section className={styles.blankSection}>
        <div className={styles.infoHero}>
          <Text fontSize="smaller" color="#525252">
            TRABAJO
          </Text>
          <Text
            fontSize={{ base: "4xl", md: "6xl", lg: "6xl" }}
            className={styles.heroMainMessage}
            color="primary"
            w={{ base: "300px", md: "600px" }}
            wordBreak="break-word"
          >
            Decubre hoy el mejor servicio para tu negocio
          </Text>
          <div>
            <InstantSearch
              indexName="contatec-search"
              searchClient={searchClient}
            >
              <CustomAutocomplete />
            </InstantSearch>
            {/* <InputGroup>
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
                  </InputGroup> */}
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
