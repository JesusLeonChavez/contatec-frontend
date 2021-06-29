import React, { createContext, useEffect, useReducer } from "react"
import { get, post, setAuth } from "../utils/http"
import reducers from "./Reducers"
import { useToast } from "@chakra-ui/react"

type InitialStateType = {
  auth?: Record<string, any>
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
  const initialState = {
    auth: {},
    authReady: false,
    authType: "none",
    user: {}
  }
  const [state, dispatch] = useReducer(reducers, initialState)
  const { authType } = state
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
      console.log("ejecutando efecto")
      const isLogged = localStorage.getItem("isLogged")
      const typeLogged = localStorage.getItem("typeLogged")
      console.log("islogged: ", isLogged)
      if (isLogged) {
        console.log("entro is Logged")
        try {
          const accessToken = await post("/api/user/refresh_token", {})
          if (accessToken.data.status) {
            localStorage.removeItem("isLogged")
            return showToast("Error con el token de acceso")
          }
          console.log("accessToken: ", accessToken.data.access_token)
          if (typeLogged === "normal") {
            console.log("setAuth: ", accessToken.data.access_token)
            setAuth(accessToken.data.access_token)
            const user = await get("/api/user/info")
            if (user.data.msg === "Autenticación inválida") {
              return showToast("Error al recuperar datos del usuario")
            }
            dispatch({
              type: "AUTH",
              payload: {
                access_token: accessToken.data.access_token
              }
            })
            dispatch({
              type: "USER",
              payload: user.data
            })
          }

          if (typeLogged === "facebook") {
            console.log("logeado con fb")
            dispatch({
              type: "AUTH",
              payload: {
                access_token: accessToken.data.access_token
              }
            })
          }

          if (typeLogged === "google") {
            console.log("logeado con google")
            dispatch({
              type: "AUTH",
              payload: {
                access_token: accessToken.data.access_token
              }
            })
          }
        } catch (err) {
          console.log("error: ", err)
        }
      }
      dispatch({
        type: "AUTH_READY",
        payload: true
      })
    }
    logging()
  }, [authType])

  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    </>
  )
}
