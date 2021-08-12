/* eslint-disable camelcase */
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
// import QuotePriceModal from "./QuotePriceModal"
import { toCapitalFirstLetter } from "../../../../utils/toCapital"
import { format } from "date-fns"

SwiperCore.use([Navigation, Thumbs])
interface PropsUserPost {
  id: number
  createdAt: string
  updatedAt: string
  us_correo: string
  us_nombre: string
  us_apellido: string
  avatar: string
}

interface PropsCategoryPost {
  id: number
  createdAt: string
  updatedAt: string
  cat_nombre: string
  cat_descripcion: string
}
interface PropsPost {
  id: number
  createdAt: string
  updatedAt: string
  pst_isActive: boolean
  pst_descripcion_corta: string
  pst_nombre: string
  pst_descripcion_incluye: string
  pst_descripcion: string
  pst_imagen_1: string
  pst_imagen_2: string
  pst_imagen_3: string
  pst_imagen_4: string
  pst_imagen_5: string
  pst_precioBase: number
  pstUsuarioId: PropsUserPost
  pstCategoriaId: PropsCategoryPost
}

interface PropsMain {
  post: PropsPost
}
export default function CategoryTittle({ post }: PropsMain) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const tags = post.pst_descripcion_incluye.split(",")
  // TODO: colocar los tags, la descripcion detallada, la fecha de publicacion, recarga de pagina
  return (
    <Box className="generalWrapper" py="6">
      <Grid
        templateColumns={{ base: "100%", lg: "70% 30%" }}
        position="relative"
      >
        <Box>
          <Flex align="center" justify="space-between">
            <Grid templateColumns="repeat(2, 1fr)" gap="2">
              <Button variant="fourth">
                {toCapitalFirstLetter(post.pstCategoriaId.cat_nombre)}
              </Button>
              <Flex align="center">
                <ZIcon name="star" color="secondary" />
                <Text>4.0 (2000)</Text>
              </Flex>
            </Grid>
            <Text>
              Publicado el {format(new Date(post.createdAt), "dd/MM/yyyy")}
            </Text>
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
                <img src={post.pst_imagen_1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={post.pst_imagen_2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={post.pst_imagen_3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={post.pst_imagen_4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={post.pst_imagen_5} />
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
                <img src={post.pst_imagen_1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={post.pst_imagen_2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={post.pst_imagen_3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={post.pst_imagen_4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={post.pst_imagen_5} />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
        <Flex
          align="center"
          justify="center"
          px="3"
          my="2"
          position="fixed"
          right="20%"
        >
          <Box boxShadow="0px 1px 4px rgba(0, 0, 0, 0.4)" px="6" py="6">
            <Grid templateColumns="repeat(1, 1fr)" gap="5">
              <Text className="bold600" fontSize="lg" color="primary">
                Descripción
              </Text>
              <Text>{toCapitalFirstLetter(post.pst_descripcion)}</Text>
              <UnorderedList spacing={3} px="3">
                {tags.map((tag, index) => (
                  <ListItem key={index}>{toCapitalFirstLetter(tag)}</ListItem>
                ))}
              </UnorderedList>
              <Text>Presupuesto</Text>
              <UnorderedList spacing={3} px="3">
                <ListItem>Desde s/.{post.pst_precioBase}</ListItem>
              </UnorderedList>
              {/* <QuotePriceModal
                  variant="third"
                  width="full"
                  showModalButtonText="Cotizar servicio"
                /> */}
            </Grid>
          </Box>
        </Flex>
      </Grid>
    </Box>
  )
}
