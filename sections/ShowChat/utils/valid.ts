import { regexDecimal, regexNumberLetters } from "../../../utils/regex"

// eslint-disable-next-line import/namespace
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
    errors.servicio = errorForm.EMPTY_SERVICE

    isValid = false
  } else if (!regexNumberLetters(values.servicio.trim())) {
    errors.servicio = errorForm.INVALID_SERVICE
    isValid = false
  } else if (values.servicio.trim().length < 10) {
    errors.servicio = "Debe tener como minimo 10 caracteres"
    isValid = false
  }

  if (!values.nombre.trim()) {
    errors.nombre = errorForm.EMPTY_NAME

    isValid = false
  } else if (!regexNumberLetters(values.nombre.trim())) {
    errors.nombre = errorForm.INVALID_NAME
    isValid = false
  } else if (values.nombre.trim().length < 10) {
    errors.nombre = "Debe tener como minimo 10 caracteres"
    isValid = false
  }

  if (!values.descripcion.trim()) {
    errors.descripcion = errorForm.EMPTY_TEXT_AREA

    isValid = false
  } else if (!regexNumberLetters(values.descripcion.trim())) {
    errors.descripcion = errorForm.INVALID_TEXT_AREA
    isValid = false
  } else if (values.descripcion.trim().length < 10) {
    errors.descripcion = "Debe tener como minimo 10 caracteres"
    isValid = false
  }

  if (!values.presupuesto) {
    errors.presupuesto = errorForm.EMPTY_BUDGET
    isValid = false
  } else if (!regexDecimal(values.presupuesto)) {
    errors.presupuesto = errorForm.INVALID_BUDGET
    isValid = false
  }

  if (!category) {
    errors.category = errorForm.EMPTY_CATEGORY
    isValid = false
  }

  return { errors, isValid }
}
