import { FormControl, Textarea } from "@chakra-ui/react"

export default function Messages() {
  return (
    <FormControl id="email">
      <Textarea h="200px" w="795px" placeholder="Escribe un mensaje" />
    </FormControl>
  )
}
