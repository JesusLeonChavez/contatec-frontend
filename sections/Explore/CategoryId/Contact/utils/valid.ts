import { regexOnlyString } from "../../../../../utils/regex"

import { errorForm } from "../../../../../utils/types"

export const validRate = (values, rate) => {
  const errors = {
    description: "",
    rate: ""
  }
  let isValid = true

  if (!values.description.trim()) {
    errors.description = errorForm.EMPTY_TEXT_AREA

    isValid = false
  } else if (!regexOnlyString(values.description.trim())) {
    errors.description = errorForm.INVALID_TEXT_AREA
    isValid = false
  }
  if (rate === 0) {
    errors.rate = errorForm.EMPTY_RATE
    isValid = false
  }

  return { errors, isValid }
}

export const validContactWorker = values => {
  const errors = {
    issue: "",
    message: ""
  }
  let isValid = true

  if (!values.issue.trim()) {
    errors.issue = errorForm.EMPTY_ISSUE

    isValid = false
  } else if (!regexOnlyString(values.issue.trim())) {
    errors.issue = errorForm.INVALID_ISSUE
    isValid = false
  }
  if (!values.message.trim()) {
    errors.message = errorForm.EMPTY_TEXT_AREA

    isValid = false
  } else if (!regexOnlyString(values.message.trim())) {
    errors.message = errorForm.INVALID_TEXT_AREA
    isValid = false
  }

  return { errors, isValid }
}
