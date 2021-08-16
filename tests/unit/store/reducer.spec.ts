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
  test("debe identificar usuario ", () => {
    const initState = {
      authType: "none"
    }

    const action = {
      type: ACTIONS.USER,
      payload: "usuario"
    }

    const state = reducers(initState, action)
    expect(state).toEqual({
      authType: "usuario"
    })
  })
  test("debe obtener categorias ", () => {
    const initState = {
      authType: "none"
    }

    const action = {
      type: ACTIONS.GET_CATEGORIES,
      payload: "categoria"
    }

    const state = reducers(initState, action)
    expect(state).toEqual({
      authType: "categoria"
    })
  })
  test("debe postear ", () => {
    const initState = {
      authType: "none"
    }

    const action = {
      type: ACTIONS.POSTS,
      payload: "post"
    }

    const state = reducers(initState, action)
    expect(state).toEqual({
      authType: "post"
    })
  })
  test("debe agregar post ", () => {
    const initState = {
      authType: "none"
    }

    const action = {
      type: ACTIONS.ADD_POST,
      payload: "agregar"
    }

    const state = reducers(initState, action)
    expect(state).toEqual({
      authType: "agregar"
    })
  })
  test("debe borrar post ", () => {
    const initState = {
      authType: "none"
    }

    const action = {
      type: ACTIONS.DELETE_POST,
      payload: "borrar"
    }

    const state = reducers(initState, action)
    expect(state).toEqual({
      authType: "borrar"
    })
})
test("debe editar post ", () => {
  const initState = {
    authType: "none"
  }

  const action = {
    type: ACTIONS.EDIT_POST,
    payload: "editar"
  }

  const state = reducers(initState, action)
  expect(state).toEqual({
    authType: "editar"
  })
})
test("debe actualizar nombre ", () => {
  const initState = {
    authType: "none"
  }

  const action = {
    type: ACTIONS.UPDATE_NAME,
    payload: "nombre"
  }

  const state = reducers(initState, action)
  expect(state).toEqual({
    authType: "nombre"
  })
})
test("debe actualizar imagen ", () => {
  const initState = {
    authType: "none"
  }

  const action = {
    type: ACTIONS.UPDATE_IMAGE,
    payload: "imagen"
  }

  const state = reducers(initState, action)
  expect(state).toEqual({
    authType: "imagen"
  })
})
test("SOCKET", () => {
  const initState = {
    authType: "none"
  }

  const action = {
    type: ACTIONS.SOCKET,
    payload: "socket"
  }

  const state = reducers(initState, action)
  expect(state).toEqual({
    authType: "socket"
  })
})
test("Default", () => {
  const initState = {
    authType: "none"
  }

  const action = {
    type: null,
    payload: "default"
  }

  const state = reducers(initState, action)
  expect(state).toEqual({
    authType: "default"
  })
})
})
