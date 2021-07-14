/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react"

import "@testing-library/jest-dom"

import { newTheme } from "../../styles/theme"

import { ChakraProvider } from "@chakra-ui/react"

import CardCategory from "../../components/CardCategory"

const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
}

describe("CardCategory", function () {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      title: "New Bar",
      imageUrl: "/assets/marketing/marketing1.png"
    }
  })

  test("debe renderizarse el componente", () => {
    const component = render(<CardCategory {...expectedProps} />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })
    expect(component).toMatchSnapshot()
  })

  test("debe recibir las propiedades con el tipo esperado", () => {
    expect(typeof expectedProps.title).toBe("string")
    expect(typeof expectedProps.imageUrl).toBe("string")
  })

  test("debe renderizar title y image", () => {
    const { getByText, getByAltText } = render(
      <CardCategory {...expectedProps} />,
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        wrapper: ChakraRenderer
      }
    )

    const title = getByText(expectedProps.title)
    const img = getByAltText(expectedProps.title)

    expect(title).toBeVisible()
    expect(img).toBeVisible()
  })
})
