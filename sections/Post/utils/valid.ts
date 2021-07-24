import { regexOnlyString, regexDecimal } from "../../../utils/regex"

import { errorForm } from "../../../utils/types"

export const validPost = (values, category, imagesFile, tags) => {
  const errors = {
    name: "",
    brief_content: "",
    description: "",
    price: "",
    category: "",
    imagesFile: "",
    tags: ""
  }

  let isValid = true

  if (!values.name.trim()) {
    errors.name = errorForm.EMPTY_NAME

    isValid = false
  } else if (!regexOnlyString(values.name.trim())) {
    errors.name = errorForm.INVALID_NAME
    isValid = false
  }

  if (!values.brief_content.trim()) {
    errors.brief_content = errorForm.EMPTY_TEXT_AREA

    isValid = false
  } else if (!regexOnlyString(values.brief_content.trim())) {
    errors.brief_content = errorForm.INVALID_TEXT_AREA
    isValid = false
  }

  if (!values.description.trim()) {
    errors.description = errorForm.EMPTY_TEXT_AREA

    isValid = false
  } else if (!regexOnlyString(values.description.trim())) {
    errors.description = errorForm.INVALID_TEXT_AREA
    isValid = false
  }

  if (!values.price) {
    errors.price = errorForm.EMPTY_PRICE
    isValid = false
  } else if (!regexDecimal(values.price)) {
    errors.price = errorForm.INVALID_PRICE
    isValid = false
  }
  if (!category) {
    errors.category = errorForm.EMPTY_CATEGORY
    isValid = false
  }

  if (imagesFile.length !== 5) {
    errors.imagesFile = errorForm.INVALID_FILE
    isValid = false
  }

  if (tags.length < 1) {
    errors.tags = errorForm.EMPTY_TAG
    isValid = false
  }

  return { errors, isValid }
}
