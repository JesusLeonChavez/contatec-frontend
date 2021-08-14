import { regexDecimal, regexOnlyString } from "../../../../../utils/regex"

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
  } else if (values.description.trim().length < 10) {
    errors.description = errorForm.SHORT_CONTENT
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

export const validQuote = values => {
  const errors = {
    name: "",
    date: "",
    budget: "",
    description: ""
  }
  let isValid = true

  if (!values.name.trim()) {
    errors.name = errorForm.EMPTY_NAME
    isValid = false
  } else if (!regexOnlyString(values.name.trim())) {
    errors.name = errorForm.INVALID_NAME
    isValid = false
  }
  if (!values.date.trim()) {
    errors.date = errorForm.EMPTY_DATE
    isValid = false
  }

  if (!values.budget) {
    errors.budget = errorForm.EMPTY_BUDGET
    isValid = false
  } else if (!regexDecimal(values.budget)) {
    errors.budget = errorForm.INVALID_BUDGET
    isValid = false
  }

  if (!values.description.trim()) {
    errors.description = errorForm.EMPTY_TEXT_AREA

    isValid = false
  } else if (!regexOnlyString(values.description.trim())) {
    errors.description = errorForm.INVALID_TEXT_AREA
    isValid = false
  }

  return { errors, isValid }
}
