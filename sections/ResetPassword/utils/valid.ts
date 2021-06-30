import { regexEmail } from "../../../utils/regex"

export const validReset = values => {
  const errors = {
    email: ""
  }
  let isValid = true
  if (!values.email) {
    errors.email = "Correo electronico es requerido"
    isValid = false
  } else if (!regexEmail(values.email)) {
    errors.email = "Correo electronico inválido"
    isValid = false
  }
  return { errors, isValid }
}
