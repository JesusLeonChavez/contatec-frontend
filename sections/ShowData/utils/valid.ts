import { regexOnlyString } from "../../../utils/regex"

import { errorForm } from "../../../utils/types"

export const validNameLastName = values => {
  const errors = {
    name: "",
    lastname: ""
  }

  let isValid = true

  if (!values.name.trim()) {
    errors.name = errorForm.EMPTY_NAME
    isValid = false
  } else if (!regexOnlyString(values.name.trim())) {
    errors.name = errorForm.INVALID_NAME
    isValid = false
  }

  if (!values.lastname.trim()) {
    errors.lastname = errorForm.EMPTY_LASTNAME
    isValid = false
  } else if (!regexOnlyString(values.lastname.trim())) {
    errors.lastname = errorForm.INVALID_LASTNAME
    isValid = false
  }

  return { errors, isValid }
}

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

export const validImage = imagesFile => {
  const errors = {
    imagesFile: ""
  }
  let isValid = true
  if (imagesFile.length !== 1) {
    errors.imagesFile = "Debe seleccionar 1 archivo"
    isValid = false
  }
  return { errors, isValid }
}
