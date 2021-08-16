/**

 * @jest-environment jsdom

 */

import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { newTheme } from "../../../styles/theme"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../../../components/Layout"

const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
}

describe("Layout", function () {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      children: <p>Contenido de prueba</p>,
      withNav: true,
      withFooter: true
    }
  })

  test("debe renderizarse el componente", () => {
    const component = render(<Layout {...expectedProps} />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })
    expect(component).toMatchSnapshot()
  })

  test("debe recibir las propiedades con el tipo esperado", () => {
    expect(typeof expectedProps.children).toBe("object")
    expect(typeof expectedProps.withNav).toBe("boolean")
    expect(typeof expectedProps.withFooter).toBe("boolean")
  })

  test("debe debe mostar el children si contiene uno", () => {
    const { getByText } = render(<Layout {...expectedProps} />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })
    const children = getByText("Contenido de prueba")
    expect(children).toBeVisible()
  })
  test("debe ocultar el navbar en caso el layout no lo requiera", () => {
    const props = {
      children: <p>Contenido de prueba</p>,
      withNav: false,
      withFooter: true
    }
    const component = render(<Layout {...props} />)
    const firstElement = component.container.firstElementChild
    expect(firstElement.innerHTML).toBe("Contenido de prueba")
  })
  test("debe ocultar el footer en caso el layout no lo requiera", () => {
    const props = {
      children: <p>Contenido de prueba</p>,
      withNav: true,
      withFooter: false
    }
    const component = render(<Layout {...props} />)
    const lastElementChild = component.container.lastElementChild
    expect(lastElementChild.innerHTML).toBe("Contenido de prueba")
  })
})
