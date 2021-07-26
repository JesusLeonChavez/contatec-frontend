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

import { useRef } from "react"
import { connectAutoComplete } from "react-instantsearch-dom"
import ZIcon from "../components/Icon"
// Aplicar  estilos
export const Autocomplete = ({ hits, currentRefinement, refine }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSelect = hit => {
    console.log(hit)
    refine(
      `${hit.description.charAt(0).toUpperCase()}${hit.description
        .split("_")
        .join(" ")
        .slice(1)}`
    )
    setTimeout(() => {
      router.push("/explorar")
    }, 500)
  }
  const handleSubmit = e => {
    e.preventDefault()
    console.log("api/buscar/" + inputRef.current?.value || "none")
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="text">
        <FormLabel>Busca el tema de tu interés</FormLabel>
        <Flex>
          <ul style={{ textDecoration: "none", listStyle: "none" }}>
            <li>
              <InputGroup w={{ base: "50", md: "md", lg: "lg" }}>
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
          <Button w={{ md: "3xs" }} variant="primary" type="submit">
            Buscar
          </Button>
        </Flex>
      </FormControl>
    </form>
  )
}

export const CustomAutocomplete = connectAutoComplete(Autocomplete)
