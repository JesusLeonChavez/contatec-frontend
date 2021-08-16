/**

 * @jest-environment jsdom

 */

 //import { render } from "@testing-library/react"
 import "@testing-library/jest-dom"
import { type } from "os"
import { any } from "prop-types"
 //import { newTheme } from "../../../../styles/theme"
 //import { ChakraProvider } from "@chakra-ui/react"
 import {createFileUrl, getIconString, setFiles} from "../../../../components/FileUpload/utils"
 
 
 describe("Utils", function () {


   test('createFileUlr', () => {
     const type: any = any
     const data: any = any

    expect(createFileUrl(type, data)).toHaveBeenCalled()
   })

   test('funcion setFiles', () => {
    const file = []
    expect(setFiles(file)).toHaveBeenCalled()
   })

   test('getIconString', () => {
    const file = ''
    expect(getIconString(file)).toHaveBeenCalled()
   })
 
 })
 