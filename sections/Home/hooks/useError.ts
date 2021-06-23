import React, { useState } from "react"

export const useErrorRegister = (
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
export const useErrorLogin = (
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