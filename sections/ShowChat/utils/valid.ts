import { regexOnlyString, regexDecimal } from "../../../utils/regex"

import { errorForm } from "../../../utils/types"

export const validQuote = (values, category) => {
  const errors = {
    servicio: "",
    nombre: "",
    presupuesto: "",
    // fechaLimite: "",
    category: "",
    descripcion: ""
  }

  let isValid = true

  if (!values.servicio.trim()) {
    errors.servicio = errorForm.EMPTY_NAME

    isValid = false
  } else if (!regexOnlyString(values.servicio.trim())) {
    errors.servicio = errorForm.INVALID_NAME
    isValid = false
  } else if (values.servicio.trim().length < 10) {
    errors.servicio = "Debe tener como minimo 10 caracteres"
    isValid = false
  }

  if (!values.nombre.trim()) {
    errors.nombre = errorForm.EMPTY_NAME

    isValid = false
  } else if (!regexOnlyString(values.nombre.trim())) {
    errors.nombre = errorForm.INVALID_NAME
    isValid = false
  } else if (values.nombre.trim().length < 10) {
    errors.nombre = "Debe tener como minimo 10 caracteres"
    isValid = false
  }

  if (!values.presupuesto) {
    errors.presupuesto = errorForm.EMPTY_PRICE
    isValid = false
  } else if (!regexDecimal(values.prespuesto)) {
    errors.presupuesto = errorForm.INVALID_PRICE
    isValid = false
  }

  if (!category) {
    errors.category = errorForm.EMPTY_CATEGORY
    isValid = false
  }

  if (!values.descripcion.trim()) {
    errors.descripcion = errorForm.EMPTY_TEXT_AREA

    isValid = false
  } else if (!regexOnlyString(values.descripcion.trim())) {
    errors.descripcion = errorForm.INVALID_TEXT_AREA
    isValid = false
  } else if (values.description.trim().length < 10) {
    errors.descripcion = "Debe tener como minimo 10 caracteres"
    isValid = false
  }

  return { errors, isValid }
}
