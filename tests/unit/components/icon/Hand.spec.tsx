 
/**

 * @jest-environment jsdom

 */

 import { render } from "@testing-library/react"
 import "@testing-library/jest-dom"
 import { newTheme } from "../../../../styles/theme"
 import { ChakraProvider } from "@chakra-ui/react"
 import Hand from "../../../../components/Icon/Hand"
 
 const ChakraRenderer = ({ children }) => {
   return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
 }
 
 describe("Hand", function () {
   test("debe renderizarse el componente", () => {
     const component = render(<Hand />, {
       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
       // @ts-ignore
       wrapper: ChakraRenderer
     })
 
     expect(component).toMatchSnapshot()
   })
 })
 
 
