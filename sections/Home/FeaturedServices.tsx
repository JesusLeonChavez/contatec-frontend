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
      title: "Crowfunding",
      price: "150",
      img: "/assets/marketing/marketing3.png"
    },
    {
      title: "Marketing de contenido",
      price: "300",
      img: "/assets/marketing/marketing4.png"
    }
  ]
  return (
    <div className="generalWrapper">
      <Flex align="center" justify="center" py={10}>
        <Text fontSize="5xl" className={styles.bold600} color="primary">
          Servicios destacados
        </Text>
      </Flex>
      <Tabs align="center" variant="unstyled" isLazy>
        <TabList>
          <Tab
            _selected={{
              color: "primary",
              boxShadow: "none",
              borderBottom: "1px",
              borderBottomColor: "primary",
              mx: "10px"
            }}
          >
            Marketing digital
          </Tab>
          <Tab
            _selected={{
              color: "primary",
              boxShadow: "none",
              borderBottom: "1px",
              borderBottomColor: "primary",
              mx: "10px"
            }}
          >
            Desarrollo web
          </Tab>
          <Tab
            _selected={{
              color: "primary",
              boxShadow: "none",
              borderBottom: "1px",
              borderBottomColor: "primary",
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
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card title={item.title} price={item.price} img={item.img} />
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
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card title={item.title} price={item.price} img={item.img} />
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
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <Card title={item.title} price={item.price} img={item.img} />
                </SwiperSlide>
              ))}
            </Swiper>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
