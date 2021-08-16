/**
 * @jest-environment jsdom
 */

 import "@testing-library/jest-dom"
 import {getColorByName} from "../../../../components/Icon/utils"
 
 test("debe reconocer color", () =>{
   expect(getColorByName("primary")).toBe("var(--primary)")
   expect(getColorByName("secondary")).toBe("var(--secondary)")
   expect(getColorByName("danger")).toBe("var(--danger)")
   expect(getColorByName("warning")).toBe("var(--warning)")
   expect(getColorByName("white")).toBe("var(--white)")
   expect(getColorByName("gray")).toBe("var(--gray)")
   expect(getColorByName("success")).toBe("var(--success)")
   expect(getColorByName("info")).toBe("var(--info)")
 })