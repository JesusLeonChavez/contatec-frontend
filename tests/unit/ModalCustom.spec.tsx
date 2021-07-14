/**
 * @jest-environment jsdom
 */
 import { render } from "@testing-library/react"
 import "@testing-library/jest-dom"
 import { newTheme } from "../../styles/theme"
 import { ChakraProvider } from "@chakra-ui/react"
 import ModalCustom from "../../components/ModalCustom"
 
const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
}

const props = {
  variant: "test",
  showModalButtonText: "test",
  type: "test"
}

describe("ModalCustom", function () {
  test("debe renderizarse", () => {
    const component = render(<ModalCustom {...props}/>, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })
    expect(component).toMatchSnapshot()
  })

  test("debe recibir las propiedades con el tipo esperado", () => {
    expect(typeof props.variant).toBe("string")
    expect(typeof props.showModalButtonText).toBe("string")
    expect(typeof props.type).toBe("string")
  })

  test("debe renderizar variant, showModalButtonText, and type", () => {
    const { getByText, getByAltText } = render(<ModalCustom {...props} />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })
    const variant = getByText(props.variant)
    const showModalButtonText = getByText(props.showModalButtonText)
    const type = getByText(props.type)
  
    expect(variant).toBeVisible()
    expect(showModalButtonText).toBeVisible()
    expect(type).toBeVisible()
  })
})



