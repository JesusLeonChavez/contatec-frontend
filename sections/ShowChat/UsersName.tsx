import { Text } from "@chakra-ui/react"
import { toCapitalFirstLetter } from "../../utils/toCapital"

export default function UsersName({ name }) {
  return (
    <Text color="#482F51" fontSize="15" px="4">
      {toCapitalFirstLetter(name.toLowerCase())}
    </Text>
  )
}
