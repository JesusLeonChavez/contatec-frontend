/**
 * @jest-environment jsdom
 */
 import { render } from "@testing-library/react"
 import "@testing-library/jest-dom"
 import {validPost} from '../../../../sections/Post/utils/valid'

  
 
 describe("Valid", function () {
 
   test("validPost", () => {
     const values = {}
     const category = true
     const imageFiles = ''
     const tags = ''

     expect(validPost(values, category, imageFiles, tags)).toHaveBeenCalled()
   })
 
 })