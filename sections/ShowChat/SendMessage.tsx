import { FormControl, Textarea } from "@chakra-ui/react"

export default function SendMessages() {
  return (
    <FormControl id="email">
      <Textarea
        resize="none"
        h="200px"
        w="795px"
        placeholder="Escribe un mensaje"
      />
    </FormControl>
  )
}
