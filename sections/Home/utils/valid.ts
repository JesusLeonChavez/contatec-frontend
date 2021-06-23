// import { RegisterValues } from "../type"

export const validRegister = values => {
  const errors = {
    name: "",
    lastName: "",
    email: "",
    password: ""
  }
  let isValid = true
  if (!values.name.trim()) {
    errors.name = "Nombre es requerido"
    isValid = false
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = "Ingrese un nombre válido"
    isValid = false
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Apellido es requerido"
    isValid = false
  } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.lastName = "Ingrese un apellido válido"
    isValid = false
  }

  if (!values.email) {
    errors.email = "Correo electronico es requerido"
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correo electronico inválido"
    isValid = false
  }

  if (!values.password) {
    errors.password = "Contraseña es requerida"
    isValid = false
  } else if (values.password.length < 7) {
    errors.password = "La contraseña debe ser de 7 carateres o más"
    isValid = false
  }

  return { errors, isValid }
}

export const validLogin = values => {
  const errors = {
    email: "",
    password: ""
  }
  let isValid = true
  if (!values.email) {
    errors.email = "Correo electronico es requerido"
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correo electronico inválido"
    isValid = false
  }

  if (!values.password) {
    errors.password = "Contraseña es requerida"
    isValid = false
  } else if (values.password.length < 7) {
    errors.password = "La contraseña debe ser de 7 carateres o más"
    isValid = false
  }

  return { errors, isValid }
}
