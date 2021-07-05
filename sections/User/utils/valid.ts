import { errorForm } from "../../../utils/types"
export const validNewPassword = values => {
  const errors = {
    password: "",
    password2: ""
  }

  let isValid = true

  if (!values.password) {
    errors.password = errorForm.EMPTY_PASSWORD
    isValid = false
  } else if (values.password.length < 7) {
    errors.password = errorForm.SHORT_PASSWORD
    isValid = false
  }
  if (!values.password2) {
    errors.password2 = errorForm.EMPTY_PASSWORD
    isValid = false
  } else if (values.password2.length < 7) {
    errors.password2 = errorForm.SHORT_PASSWORD
    isValid = false
  } else if (values.password2 !== values.password) {
    errors.password2 = errorForm.UNMATCH_PASSWORD
    isValid = false
  }

  return { errors, isValid }
}
