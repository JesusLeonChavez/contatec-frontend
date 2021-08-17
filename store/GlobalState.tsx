import React, { createContext, useEffect, useReducer, useState } from "react"
import { get, post, setAuth } from "../utils/http"
import reducers from "./Reducers"
import { useToast } from "@chakra-ui/react"
import Socket from "socket.io-client"

// type InitialStateType = {
//   auth?: Record<string, any>
//   authReady?: boolean
// }
export const DataContext = createContext<{
  state: any
  dispatch: React.Dispatch<any>
}>({
  state: {},
  dispatch: () => null
})

export const DataProvider = ({ children }) => {
  const initialState: any = {
    auth: {},
    authReady: false,
    authType: "none",
    categories: [],
    posts: [],
    socket: {}
  }

  const [socket, setSocket] = useState<any>(null)
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
      // TODO: console.log
      // console.log("ejecutando efecto")
      const isLogged = localStorage.getItem("isLogged")
      const typeLogged = localStorage.getItem("typeLogged")
      if (isLogged) {
        try {
          const accessToken = await post("/api/user/refresh_token", {})
          // TODO: console.log
          // console.log("accessToken: ", accessToken)
          if (accessToken.data.status) {
            localStorage.removeItem("isLogged")
            return showToast("Error con el token de acceso")
          }
          // console.log("accessToken: ", accessToken.data.access_token)
          // console.log("setAuth: ", accessToken.data.access_token)
          setAuth(accessToken.data.access_token)
          const { data } = await get("/api/user/info")
          // console.log(data)
          const { user } = data

          if (user.msg === "Autenticación inválida") {
            return showToast("Error al recuperar datos del usuario")
          }
          // console.log(user)
          setSocket(Socket("https://contatec.herokuapp.com"))
          // console.log(accessToken)
          dispatch({
            type: "AUTH",
            payload: {
              access_token: accessToken.data.access_token,
              user: {
                id: user.id,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
                us_correo: user.us_correo,
                us_nombre: user.us_nombre,
                us_apellido: user.us_apellido,
                avatar: user.avatar
                // posts: user.data.posts
              }
            }
          })

          dispatch({
            type: "POSTS",
            payload: user.posts
          })
          if (typeLogged === "normal") {
            dispatch({ type: "AUTH_TYPE", payload: "normal" })
          }
          if (typeLogged === "facebook") {
            dispatch({ type: "AUTH_TYPE", payload: "facebook" })
          }

          if (typeLogged === "google") {
            dispatch({ type: "AUTH_TYPE", payload: "google" })
          }
        } catch (err) {
          console.log("error: ", err)
        }
      }
    }
    dispatch({
      type: "AUTH_READY",
      payload: true
    })
    logging()

    // get("/api/category/categories")
    //   .then(categories => {
    //     dispatch({ type: "GET_CATEGORIES", payload: categories.data })
    //   })
    //   .catch(() => showToast("Error al recuperar categorias"))
    // console.log("efecto")
  }, [authType])

  useEffect(() => {
    if (Object.keys(state.auth).length === 0) return
    if (!socket) return
    socket.on("connect", () => {
      // console.log("emitiendo")
      socket.emit("identity", state.auth.user.id)
    })
    dispatch({ type: "SOCKET", payload: socket })
  }, [socket])

  // useEffect(() => {
  //   console.log("cambio en state: ", state)
  // }, [state])

  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    </>
  )
}
