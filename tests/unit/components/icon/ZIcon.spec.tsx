/**
 * @jest-environment jsdom
 */
 import { render } from "@testing-library/react"
 import "@testing-library/jest-dom"
 import VIcon from "../../../../components/Icon/ZIcon"
import { getColorByName } from "../../../../components/Icon/utils"
import { IconName } from "../../../../components/Icon/types"


 
 describe("VIcon", function () {

    const name:IconName = 'more-h'
     const color:any =  getColorByName("primary")
     const size = 30
     const pointer = true
     const disabled = false
 
   test("VIcon", () => {

     expect(VIcon({name,color,size,pointer,disabled })).toHaveBeenCalled()
   })

   
 
 })