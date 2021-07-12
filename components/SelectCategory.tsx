import { Select, Box } from "@chakra-ui/react"

export default function Selectd() {
  return (
    <Box>
      <Select
        cursorColor="primary"
        focusBorderColor="primary"
        boderColor="primary"
        placeholder="Elige una categoria"
      >
        <option value="Marketin digital">Marketing digital</option>
        <option value="Desarrollo Web">Desarrollo web</option>
        <option value="Programación">Programación</option>
      </Select>
    </Box>
  )
}
