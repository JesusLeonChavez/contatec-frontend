 
 
/**

 * @jest-environment jsdom

 */

 import { render } from "@testing-library/react"
 import "@testing-library/jest-dom"
 import { newTheme } from "../../../../styles/theme"
 import { ChakraProvider } from "@chakra-ui/react"
 import HelpOutline from "../../../../components/Icon/HelpOutline"
 
 const ChakraRenderer = ({ children }) => {
   return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
 }
 
 describe("HelpOutline", function () {
   test("debe renderizarse el componente", () => {
     const component = render(<HelpOutline />, {
       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
       // @ts-ignore
       wrapper: ChakraRenderer
     })
 
     expect(component).toMatchSnapshot()
   })
 })
 