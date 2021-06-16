import {
  Text,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay, Navigation } from "swiper/core"
import styles from "../../styles/sections/Home.module.css"
import Card from "../../components/Card"
SwiperCore.use([Autoplay, Navigation])
export default function FeaturedServices() {
  return (
    <div className="generalWrapper">
      <Flex align="center" justify="center" py={10}>
        <Text fontSize="5xl" className={styles.bold600}>
          Servicios destacados
        </Text>
      </Flex>
      <Tabs align="center" variant="unstyled" isLazy>
        <TabList>
          <Tab
            _selected={{
              color: "secondary",
              boxShadow: "none",
              borderBottom: "1px",
              borderBottomColor: "secondary",
              mx: "10px"
            }}
          >
            Marketing digital
          </Tab>
          <Tab
            _selected={{
              color: "secondary",
              boxShadow: "none",
              borderBottom: "1px",
              borderBottomColor: "secondary",
              mx: "10px"
            }}
          >
            Desarrollo web
          </Tab>
          <Tab
            _selected={{
              color: "secondary",
              boxShadow: "none",
              borderBottom: "1px",
              borderBottomColor: "secondary",
              mx: "10px"
            }}
          >
            Programación
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
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
              {["1", "2", "3", "4", "5", "6", "7", "8"].map((item, index) => (
                <SwiperSlide key={index}>
                  <Card />
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>
          <TabPanel>
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
              className="mySwiperTab2"
            >
              {["1", "2", "3", "4", "5", "6", "7", "8"].map((item, index) => (
                <SwiperSlide key={index}>
                  <Card />
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>
          <TabPanel>
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
              {["1", "2", "3", "4", "5", "6", "7", "8"].map((item, index) => (
                <SwiperSlide key={index}>
                  <Card />
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
