// eslint-disable-next-line import/no-extraneous-dependencies
import { whiten } from '@chakra-ui/theme-tools'
export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: 'primary',
      color: '#fff',
      _hover: {
        bg: whiten('primary', 20)
      },
      _active: {
        transform: 'scale(0.9)'
      },
      _focus: {
        boxShadow: 'none'
      }
    }
  },
  // default values for `size` and `variant`
  defaultProps: {}
}
