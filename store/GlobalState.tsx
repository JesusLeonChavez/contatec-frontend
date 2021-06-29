import React, { createContext, useEffect, useReducer } from "react"
import { get, post, setAuth } from "../utils/http"
import reducers from "./Reducers"
import { useToast } from "@chakra-ui/react"

type InitialStateType = {
  auth?: Record<string, unknown>
  authReady?: boolean
}
export const DataContext = createContext<{
  state: InitialStateType
  dispatch: React.Dispatch<any>
}>({
  state: {},
  dispatch: () => null
})

export const DataProvider = ({ children }) => {
  const initialState = { auth: {}, authReady: false }

  const [state, dispatch] = useReducer(reducers, initialState)
  const toast = useToast()
  const showToast = errMessage => {
    toast({
      title: "Error al iniciar sesión.",
      description: `${errMessage}`,
      position: "top",
      status: "error",
      duration: 9000,
      isClosable: true
    })
  }

  useEffect(() => {
    const logging = async () => {
      const isLogged = localStorage.getItem("isLogged")
      if (isLogged) {
        try {
          const accessToken = await post("/api/user/refresh_token", {})
          if (accessToken.data.status) {
            localStorage.removeItem("isLogged")
            return showToast("Error con el token de acceso")
          }
          setAuth(accessToken.data.access_token)
          const user = await get("/api/user/info")
          if (user.data.msg === "Autenticación inválida") {
            return showToast("Error al recuperar datos del usuario")
          }
          dispatch({
            type: "AUTH",
            payload: {
              access_token: accessToken.data.access_token,
              user: user.data
            }
          })
        } catch (err) {
          console.log("error: ", err)
        }
      }
      console.log("cambiando estado")
      dispatch({
        type: "AUTH_READY",
        payload: true
      })
    }
    logging()
  }, [])

  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    </>
  )
}
