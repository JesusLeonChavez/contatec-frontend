/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { newTheme } from "../../styles/theme"
import { ChakraProvider } from "@chakra-ui/react"
import Card from "../../components/Card"

const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
}
describe("Card", function () {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      title: "New Bar",
      price: "123",
      img: "/assets/marketing/marketing1.png"
    }
  })

  test("debe recibir las propiedades con el tipo esperado", () => {
    expect(typeof expectedProps.title).toBe("string")
    expect(typeof expectedProps.price).toBe("string")
    expect(typeof expectedProps.img).toBe("string")
  })

  test("debe renderizar title, price, and image", () => {
    const { getByText, getByAltText } = render(<Card {...expectedProps} />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })
    const title = getByText(expectedProps.title)
    const price = getByText(`Desde S/. ${expectedProps.price}`)
    const img = getByAltText(expectedProps.title)

    expect(title).toBeVisible()
    expect(price).toBeVisible()
    expect(img).toBeVisible()
  })
})
