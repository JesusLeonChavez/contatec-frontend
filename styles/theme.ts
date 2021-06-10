import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/buttonStyles'
export const newTheme = extendTheme({
  colors: {
    primary: '#EB0029',
    secondary: '#FF6F91',
    highlight: '#00C9A7'
  },
  components: {
    Button
  }
})
