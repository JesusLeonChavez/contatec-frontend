import { toCapitalFirstLetter } from "../../../utils/toCapital"

describe("Pruebas en toCapital", () => {
  test("debe retonar true si es una cadenas de letras sin numeros", () => {
    const result = toCapitalFirstLetter("prueba")

    expect(result).toBe("Prueba")
  })
})
