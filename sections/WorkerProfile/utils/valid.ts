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
  } else if (values.name.length <= 4) {
    errors.name = errorForm.SHORT_NAME

    isValid = false
  } else if (!regexOnlyString(values.name.trim())) {
    errors.name = errorForm.INVALID_NAME

    isValid = false
  }

  if (!values.lastname.trim()) {
    errors.lastname = errorForm.EMPTY_LASTNAME

    isValid = false
  } else if (values.lastname.length <= 4) {
    errors.lastname = errorForm.SHORT_LASTNAME

    isValid = false
  } else if (!regexOnlyString(values.lastname.trim())) {
    errors.lastname = errorForm.INVALID_LASTNAME

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
