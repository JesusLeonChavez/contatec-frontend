/**

 * @jest-environment jsdom

 */

 import { render } from "@testing-library/react"
 import "@testing-library/jest-dom"
 import { newTheme } from "../../../../styles/theme"
 import { ChakraProvider } from "@chakra-ui/react"
 import FileUpload from "../../../../components/FileUpload/FileUpload"
 
 const ChakraRenderer = ({ children }) => {
   return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
 }
 
 describe("FileUpload", function () {
  let FileUploadProps
   test("debe renderizarse el componente", () => {
     const component = render(<FileUpload{...FileUploadProps}  />, {
       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
       // @ts-ignore
       wrapper: ChakraRenderer
     })
     expect(component).toMatchSnapshot()
   })
 
 })
 