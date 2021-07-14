/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import { newTheme } from "../../styles/theme"
import { ChakraProvider } from "@chakra-ui/react"
import {Autocomplete} from "../../components/AutoComplete"
const props ={ hits:[], currentRefinement:{}, refine:()=>{}}
const ChakraRenderer = ({ children }) => {
  return <ChakraProvider theme={newTheme}>{children}</ChakraProvider>
}
describe("Autocomplete", function () {
  test("debe renderizarse", () => {
    const component = render(<Autocomplete />,{wrapper:ChakraRenderer})

    expect(component).toMatchSnapshot()
  })

  test("debe pasar parametros", () => {
    const component = render(<Autocomplete {...props} />,{wrapper:ChakraRenderer})

    expect(component).toMatchSnapshot()
  })
})

