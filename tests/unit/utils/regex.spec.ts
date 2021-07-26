import { regexEmail, regexOnlyString, regexDecimal } from "../../../utils/regex"

describe("Pruebas en regex", () => {
  test("debe retonar true si es una cadenas de letras sin numeros", () => {
    const result = regexOnlyString("prubea")
    expect(result).toBe(true)
  })
  test("debe retonar false si es una cadenas contiene numeros", () => {
    const result = regexOnlyString("123548 a")
    expect(result).toBe(false)
  })
  test("debe retonar true si es una cadenas de texto con un punto decimal y a lo mucho dos decimales posteriores", () => {
    const result = regexDecimal("12.30")
    expect(result).toBe(true)
  })
  test("debe retonar false si no es una cadenas de texto con un punto decimal y a lo mucho dos decimales posteriores", () => {
    const result = regexDecimal("12...36")
    expect(result).toBe(false)
  })
  test("debe retonar true si es una cadenas de texto con email valido", () => {
    const result = regexEmail("sebas@gmail.com")
    expect(result).toBe(true)
  })
  test("debe retonar false si no es una cadenas de texto con email valido", () => {
    const result = regexEmail("sebas!4")
    expect(result).toBe(false)
  })
})
