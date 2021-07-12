/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"

import "@testing-library/jest-dom"

import { newTheme } from "../../styles/theme"

import { ChakraProvider } from "@chakra-ui/react"

import Comentary from "../../components/Comentary"
import React from "react"

const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
}

describe("Comentary", function () {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      img: "imagen.png",
      name: "Julia Rosas",
      comentary: "Este es mi primer comentario",
      quantityStars: 4
    }
  })

  test("debe renderizarse", () => {
    const component = render(<Comentary {...expectedProps} />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })
    expect(component).toMatchSnapshot()
  })

  test("debe recibir las propiedades con el tipo esperado", () => {
    expect(typeof expectedProps.img).toBe("string")
    expect(typeof expectedProps.name).toBe("string")
    expect(typeof expectedProps.comentary).toBe("string")
    expect(typeof expectedProps.quantityStars).toBe("number")
  })

  test("debe renderizar img, name, comentary y quantityStars", () => {
    const { getByText, getByRole } = render(<Comentary {...expectedProps} />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })

    const name = getByText(expectedProps.name)
    const img = getByRole("img")
    const comentary = getByText(expectedProps.comentary)
    const quantityStars = getByText(expectedProps.quantityStars)

    expect(name).toBeVisible()
    expect(img).toBeVisible()
    expect(comentary).toBeVisible()
    expect(quantityStars).toBeVisible()
  })
})
