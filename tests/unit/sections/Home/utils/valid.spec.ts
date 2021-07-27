import {
  validRegister,
  validLogin
} from "../../../../../sections/Home/utils/valid"

describe("Pruebas en validHome", () => {
  test("debe retonar false en el registro si los datos son incorrectos", () => {
    const { isValid } = validRegister({
      name: "Nombre",
      lastName: "Apellido",
      email: "sebas@gmail.com",
      password: "12346"
    })
    expect(isValid).toBe(false)
  })
  test("debe retonar false en el login si los datos son incorrectos", () => {
    const { isValid } = validLogin({
      email: "sebas@gmail.com",
      password: "12346"
    })

    expect(isValid).toBe(false)
  })
})
