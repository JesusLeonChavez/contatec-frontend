import React, { useState } from "react"
import { registerValues } from "../type"

export const useForm = (
  initialState
): [registerValues, React.ChangeEventHandler<HTMLInputElement>, () => void] => {
  const [values, setValues] = useState(initialState)

  const handleInputChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  const reset = () => {
    setValues(initialState)
  }
  return [values, handleInputChange, reset]
}
