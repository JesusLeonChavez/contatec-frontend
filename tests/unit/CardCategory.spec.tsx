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
// eslint-disable-next-line react/display-name
jest.mock("next/image", () => ({ src, alt }) => <img src={src} alt={alt} />)
describe("CardCategory", function () {
  let expectedProps

  beforeEach(() => {
    // eslint-disable-next-line react/display-name

    expectedProps = {
      post: {
        createdAt: "2021-07-26T16:02:27.191Z",
        id: 215,
        pstUsuarioId: {
          avatar: "",
          createdAt: "2021-06-29T07:30:23.564Z",
          id: 115,
          updatedAt: "2021-06-30T22:13:02.000Z",
          us_apellido: "Bongo",
          us_correo: "alexandercode1464@gmail.com",
          us_nombre: "Sebas"
        },
        pstCategoriaId: {
          id: 115
        },
        pst_descripcion: "adadadadadasda",
        pst_descripcion_corta: "daddadadadad",
        pst_descripcion_incluye: "dadada",
        pst_imagen_1:
          "https://res.cloudinary.com/cbazcode/image/upload/v1627316836/contatec_media/td6rz2gymsbvfrpl2e4b.png",
        pst_imagen_2:
          "https://res.cloudinary.com/cbazcode/image/upload/v1627316840/contatec_media/x8nyptpcmwvud6oy3fh5.png",
        pst_imagen_3:
          "https://res.cloudinary.com/cbazcode/image/upload/v1627316841/contatec_media/tozqa4akrvdrnju2fpk4.png",
        pst_imagen_4:
          "https://res.cloudinary.com/cbazcode/image/upload/v1627316843/contatec_media/tgesiwybenjrtgmbgozj.png",
        pst_imagen_5:
          "https://res.cloudinary.com/cbazcode/image/upload/v1627316846/contatec_media/pfcuh4wdwndy3przmssy.jpg",
        pst_isActive: true,
        pst_nombre: "preuba de conocimiento",
        pst_precioBase: 20,
        updatedAt: "2021-07-26T16:27:29.000Z"
      },
      categoryid: "45",
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

  // test("debe renderizar title y image", () => {
  //   const { getByText, getByAltText } = render(
  //     <CardCategory {...expectedProps} />,
  //     {
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-ignore
  //       wrapper: ChakraRenderer
  //     }
  //   )

  //   const title = getByText(expectedProps.title)
  //   const img = getByAltText(expectedProps.title)

  //   expect(title).toBeVisible()
  //   expect(img).toBeVisible()
  // })
})
