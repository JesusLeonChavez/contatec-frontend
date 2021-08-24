import {
  Input,
  Box,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel,
  Button,
  Flex
} from "@chakra-ui/react"
import router from "next/router"
import { useRef, useState } from "react"
import { connectAutoComplete } from "react-instantsearch-dom"
import ZIcon from "../components/Icon"
import { post } from "../utils/http"
import showToast from "./Toast"

// Aplicar  estilos

// export const handleSelect = (hit, refine) => {
//   // console.log(hit)
//   refine(
//     `${hit.description.charAt(0).toUpperCase()}${hit.description
//       .split("_")
//       .join(" ")
//       .slice(1)}`
//   )
//   // eslint-disable-next-line camelcase
//   const { objectID, category_id } = hit
//   setTimeout(() => {
//     // eslint-disable-next-line camelcase
//     router.push(`/explorar/${category_id}/${objectID}`)
//   }, 500)
// }

export const Autocomplete = ({ hits, currentRefinement, refine }) => {
  const [isLoading, setisLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSelect = hit => {
    // console.log(hit)
    refine(
      `${hit.description.charAt(0).toUpperCase()}${hit.description
        .split("_")
        .join(" ")
        .slice(1)}`
    )
    setisLoading(true)
    // eslint-disable-next-line camelcase
    const { objectID, category_id } = hit
    setTimeout(() => {
      setisLoading(false)
      // eslint-disable-next-line camelcase
      router.push(`/explorar/${category_id}/${objectID}`)
    }, 200)
  }
  const handleSubmit = async e => {
    e.preventDefault()
    // const inputRef = useRef<HTMLInputElement>(null)
    setisLoading(true)
    const res = await post("/api/post/search", {
      nombre_post: inputRef.current?.value,
      categoria_post: inputRef.current?.value
    })
    if (res.data.message === "Http Exception") {
      setisLoading(false)
      return showToast(
        "Error",
        "No se encontraron servicios relacionados a su busqueda",
        "error"
      )
    }
    const { idCategoria, idPost } = res.data.data
    setisLoading(false)
    router.push(`/explorar/${idCategoria}/${idPost}`)
    // console.log("api/buscar/" + inputRef.current?.value || "none")
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="text">
        <FormLabel>Busca el tema de tu interés</FormLabel>
        <Flex>
          <ul style={{ textDecoration: "none", listStyle: "none" }}>
            <li>
              <InputGroup w={{ base: "64", md: "md", lg: "lg" }}>
                <InputLeftElement
                  pointerEvents="none"
                  // eslint-disable-next-line react/no-children-prop
                  children={<ZIcon name="search" />}
                />
                <Input
                  ref={inputRef}
                  type="search"
                  placeholder="P. ej: Desarrollo web"
                  bg="white"
                  name="search"
                  value={currentRefinement}
                  onChange={event => refine(event.currentTarget.value)}
                  autoComplete="off"
                />
              </InputGroup>
            </li>
            {currentRefinement &&
              hits.map(hit => (
                <Box
                  key={hit.objectID}
                  bg="white"
                  color="primary"
                  p="3"
                  cursor="pointer"
                  transition="all 0.1s ease-in-out"
                  shadow="xl"
                  _hover={{ backgroundColor: "primary", color: "white" }}
                  onClick={() => {
                    handleSelect(hit)
                  }}
                >
                  {hit.description.charAt(0).toUpperCase()}
                  {hit.description.split("_").join(" ").slice(1)}
                </Box>
              ))}
          </ul>
          <Button
            w={{ md: "3xs" }}
            variant="primary"
            type="submit"
            isLoading={isLoading}
            className="buttonDisabledPrimary"
          >
            Buscar
          </Button>
        </Flex>
      </FormControl>
    </form>
  )
}

export const CustomAutocomplete = connectAutoComplete(Autocomplete)
