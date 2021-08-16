/**

 * @jest-environment jsdom

 */

import { render } from "@testing-library/react"

import "@testing-library/jest-dom"

import { newTheme } from "../../../styles/theme"

import { ChakraProvider } from "@chakra-ui/react"

import Navbar from "../../../components/Navbar"

import React from "react"

const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
}

describe("Navbar", function () {
  test("debe renderizarse", () => {
    const component = render(<Navbar />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })
    expect(component).toMatchSnapshot()
  })
})
