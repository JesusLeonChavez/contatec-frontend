import { regexEmail } from "../../../utils/regex"
import { errorForm } from "../../../utils/types"

export const validReset = values => {
  const errors = {
    email: ""
  }
  let isValid = true
  if (!values.email) {
    errors.email = errorForm.EMPTY_EMAIL
    isValid = false
  } else if (!regexEmail(values.email)) {
    errors.email = errorForm.INVALID_EMAIL
    isValid = false
  }
  return { errors, isValid }
}
