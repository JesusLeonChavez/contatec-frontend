/**

 * @jest-environment jsdom

 */

import { render } from "@testing-library/react"

import "@testing-library/jest-dom"

import { newTheme } from "../../styles/theme"

import { ChakraProvider } from "@chakra-ui/react"

import Progress from "../../components/Progress"

import React from "react"

const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
}

describe("Progress", function () {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      value: 100,
      start: "3",
      quantity: 12
    }
  })

  test("debe renderizarse", () => {
    const component = render(<Progress {...expectedProps} />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })

    expect(component).toMatchSnapshot()
  })

  test("debe recibir las propiedades con el tipo esperado", () => {
    expect(typeof expectedProps.value).toBe("number")
    expect(typeof expectedProps.start).toBe("string")
    expect(typeof expectedProps.quantity).toBe("number")
  })

  test("debe renderizar start, name y quantity", () => {
    const { getByText } = render(<Progress {...expectedProps} />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })

    const start = getByText(expectedProps.start)
    const quantity = getByText(`(${expectedProps.quantity})`)

    expect(start).toBeVisible()

    expect(quantity).toBeVisible()
  })
})
