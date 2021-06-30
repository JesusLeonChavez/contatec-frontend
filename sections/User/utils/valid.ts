export const validNewPassword = values => {
  const errors = {
    password: "",
    password2: ""
  }

  let isValid = true

  if (!values.password) {
    errors.password = "Contraseña es requerida"
    isValid = false
  } else if (values.password.length < 7) {
    errors.password = "La contraseña debe ser de 7 carateres o más"
    isValid = false
  }
  if (!values.password2) {
    errors.password2 = "Contraseña es requerida"
    isValid = false
  } else if (values.password2.length < 7) {
    errors.password2 = "La contraseña debe ser de 7 carateres o más"
    isValid = false
  } else if (values.password2 !== values.password) {
    errors.password2 = "La contraseñas no coinciden"
    isValid = false
  }

  return { errors, isValid }
}
