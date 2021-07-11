/**
 * @jest-environment jsdom
 */
import { renderHook, act } from "@testing-library/react-hooks"
import { useForm } from "../../../utils/hooks/useForm"

describe("pruebas en useForm", () => {
  const initialForm = {
    name: "sebastian",
    email: "pepe@gmail.com"
  }

  test("debe de mostrar los valores iniciales", () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [formValue, handleInputChange, reset] = result.current
    expect(formValue).toEqual(initialForm)
    expect(typeof handleInputChange).toBe("function")
    expect(typeof reset).toBe("function")
  })

  test("debe de cambiar los valores del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm))

    const [, handleInputChange] = result.current

    act(() => {
      handleInputChange({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        target: {
          name: "name",

          value: "melisa"
        }
      })
    })

    const [formValue] = result.current

    expect(formValue).toEqual({ ...initialForm, name: "melisa" })
  })

  test("debe de reestablecer el formulario con RESET", () => {
    const { result } = renderHook(() => useForm(initialForm))

    const [, handleInputChange] = result.current

    act(() => {
      handleInputChange({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        target: {
          name: "name",

          value: "melisa"
        }
      })
    })

    const [formValue] = result.current

    expect(formValue).toEqual({ ...initialForm, name: "melisa" })

    const [, , reset] = result.current

    act(() => {
      reset()
    })

    const [formValueReset] = result.current

    expect(formValueReset).toEqual(initialForm)
  })
})
