/**

 * @jest-environment jsdom

 */

import { render } from "@testing-library/react"

import "@testing-library/jest-dom"

import { newTheme } from "../../../../styles/theme"

import { ChakraProvider } from "@chakra-ui/react"

import Register from "../../../../sections/Home/Register"

const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
}

describe("Register", function () {
  test("debe renderizarse el componente", () => {
    const component = render(
      <Register variant="primary" width="3xs" showModalButtonText="Prueba" />,
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        wrapper: ChakraRenderer
      }
    )
    expect(component).toMatchSnapshot()
  })
})
