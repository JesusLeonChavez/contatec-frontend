import React, { useState } from "react"

export const useError = (
  initialState = {}
): [
  Record<string, string>,

  React.Dispatch<React.SetStateAction<Record<string, string>>>,

  () => void
] => {
  const [errors, setErrors] = useState(initialState)

  const resetErrors = () => {
    setErrors(initialState)
  }

  return [errors, setErrors, resetErrors]
}
