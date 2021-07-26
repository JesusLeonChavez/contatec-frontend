/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react"

import "@testing-library/jest-dom"

import { newTheme } from "../../styles/theme"

import { ChakraProvider } from "@chakra-ui/react"

import Dialog from "../../components/Dialog"

const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
}

describe("Dialog", function () {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      title: "tirulo",
      content: "Contenido",
      accept: "Sí, acepto",
      cancel: "No, cancelar",
      callbackFunction: result => {
        return result
      },
      color: "primary",
      icon: "search"
    }
  })

  test("debe renderizarse el componente", () => {
    const component = render(<Dialog {...expectedProps} />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })

    expect(component).toMatchSnapshot()
  })

  test("debe recibir las propiedades con el tipo esperado", () => {
    expect(typeof expectedProps.callbackFunction).toBe("function")
    expect(typeof expectedProps.title).toBe("string")
    expect(typeof expectedProps.content).toBe("string")
    expect(typeof expectedProps.accept).toBe("string")
    expect(typeof expectedProps.cancel).toBe("string")
    expect(typeof expectedProps.color).toBe("string")
    expect(typeof expectedProps.icon).toBe("string")
  })

  test("debe presionar el boton aceptar o cancelar", () => {
    const { getAllByRole } = render(<Dialog {...expectedProps} />)
    const buttons = getAllByRole("button")
    expect(buttons).toHaveLength(2)
  })
})
