export const validReset = values => {
  const errors = {
    email: ""
  }
  let isValid = true
  if (!values.email) {
    errors.email = "Correo electronico es requerido"
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correo electronico inválido"
    isValid = false
  }
  return { errors, isValid }
}
