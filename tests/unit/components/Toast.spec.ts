/**
 * @jest-environment jsdom
 */
 import { render } from "@testing-library/react"
 import "@testing-library/jest-dom"
 import { newTheme } from "../../../styles/theme"
 import Toast from "../../../components/Toast"
 


const props = {
  title: "test",
  message: "test", 
  type: "string"

}

describe("showToast", function () {

  test("debe recibir las propiedades con el tipo esperado", () => {
    expect(typeof props.title).toBe("string")
    expect(typeof props.message).toBe("string")
    expect(typeof props.type).toBe("string")
  })
})
