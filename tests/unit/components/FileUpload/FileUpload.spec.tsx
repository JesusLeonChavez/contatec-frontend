/**

 * @jest-environment jsdom

 */

 import { render } from "@testing-library/react"
 import "@testing-library/jest-dom"
 import { newTheme } from "../../../../styles/theme"
 import { ChakraProvider } from "@chakra-ui/react"
 import FileUpload from "../../../../components/FileUpload/FileUpload"
 import { FileLink, handleCollapse, onChange } from "../../../../components/FileUpload/FileUpload"
 
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

   test('funcion FileLikn', () => {
    const filename = ''
    const url = ''
    const size = 0
    const extension = ""
    const mime_type = ""
    expect(FileLink(filename, url, size, extension, mime_type)).toHaveBeenCalled()
   })

   test('funcion handleCollapse', () => {
    const value = Boolean
    expect(handleCollapse(value)).toHaveBeenCalled()
   })

   test('funcion OnChange', () => {
    const value = Boolean
    expect(onChange(Event)).toHaveBeenCalled()
   })
 
 })
 