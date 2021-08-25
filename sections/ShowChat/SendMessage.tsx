import { FormControl, Textarea } from "@chakra-ui/react"

export default function SendMessages({
  newMessage,
  setNewMessage,
  onKeyDown,
  textArearef
}) {
  return (
    <FormControl id="email" h="100%">
      <Textarea
        _focus={{ border: "none" }}
        ref={textArearef}
        resize="none"
        h="full"
        w="795px"
        value={newMessage}
        placeholder="Escribe un mensaje"
        onChange={e => {
          setNewMessage(e.target.value)
        }}
        rounded="none"
        onKeyDown={onKeyDown}
      />
    </FormControl>
  )
}
