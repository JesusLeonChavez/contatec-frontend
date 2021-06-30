import React, { useState } from "react"

export const useForm = (
  initialState
): [
  Record<string, string>,

  React.ChangeEventHandler<HTMLInputElement>,

  () => void
] => {
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
