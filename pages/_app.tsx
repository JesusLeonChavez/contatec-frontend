import "../styles/globals.css"
import "swiper/swiper.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/scrollbar/scrollbar.min.css"
import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { newTheme } from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={newTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
