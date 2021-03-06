/**

 * @jest-environment jsdom

 */

import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { newTheme } from "../../../styles/theme"
import { ChakraProvider } from "@chakra-ui/react"
import ProgressDialog from "../../../components/ProgressDialog"

const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
}

describe("ProgressDialog", function () {
  let expectedProps

  beforeEach(() => {
    expectedProps = {
      content: "Contenido"
    }
  })

  test("debe renderizarse el componente", () => {
    const component = render(<ProgressDialog {...expectedProps} />, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      wrapper: ChakraRenderer
    })
    expect(component).toMatchSnapshot()
  })

  test("debe recibir las propiedades con el tipo esperado", () => {
    expect(typeof expectedProps.content).toBe("string")
  })
})
