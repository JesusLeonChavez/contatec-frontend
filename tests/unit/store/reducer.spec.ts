import reducers from "../../../store/Reducers"
import { ACTIONS } from "../../../store/Actions"

describe("Pruebas en reducer", () => {
  test("debe de realizar el login", () => {
    const initState = {}

    const action = {
      type: ACTIONS.AUTH,
      payload: {
        access_token: "asdadad115613abc",
        user: "Sebastian"
      }
    }

    const state = reducers(initState, action)

    expect(state).toEqual({
      auth: { access_token: "asdadad115613abc", user: "Sebastian" }
    })
  })

  test("debe de realizar el logout", () => {
    const initState = {
      auth: { access_token: "asdadad115613abc", user: "Sebastian" }
    }

    const action = {
      type: ACTIONS.AUTH,
      payload: {}
    }

    const state = reducers(initState, action)
    expect(state).toEqual({
      auth: {}
    })
  })
  test("debe ser verdadero cuando el usuario logeado ya este listo ", () => {
    const initState = {
      authReady: false
    }

    const action = {
      type: ACTIONS.AUTH_READY,
      payload: true
    }

    const state = reducers(initState, action)
    expect(state).toEqual({
      authReady: true
    })
  })
  test("debe guardar el tipo de logeo del usuario ", () => {
    const initState = {
      authType: "none"
    }

    const action = {
      type: ACTIONS.AUTH_TYPE,
      payload: "gmail"
    }

    const state = reducers(initState, action)
    expect(state).toEqual({
      authType: "gmail"
    })
  })
})
