import { Input } from "@chakra-ui/react"
import { connectAutoComplete } from "react-instantsearch-dom"
// Aplicar  estilos
export const Autocomplete = ({ hits, currentRefinement, refine }) => {
  return (
    <ul style={{ textDecoration: "none", listStyle: "none" }}>
      <li>
        <Input
          type="search"
          placeholder="P. ej: Desarrollo web"
          bg="white"
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
        />
      </li>
      {currentRefinement &&
        hits.map(hit => (
          <li key={hit.objectID}>
            {hit.description.charAt(0).toUpperCase()}
            {hit.description.split("_").join(" ").slice(1)}
          </li>
        ))}
    </ul>
  )
}

export const CustomAutocomplete = connectAutoComplete(Autocomplete)
