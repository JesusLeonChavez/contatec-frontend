import { FormControl, Textarea } from "@chakra-ui/react"

export default function SendMessages({
  newMessage,
  setNewMessage,
  onKeyDown,
  textArearef
}) {
  return (
    <FormControl id="email">
      <Textarea
        ref={textArearef}
        resize="none"
        h="full"
        w="795px"
        value={newMessage}
        placeholder="Escribe un mensaje"
        onChange={e => {
          setNewMessage(e.target.value)
        }}
        onKeyDown={onKeyDown}
      />
    </FormControl>
  )
}
