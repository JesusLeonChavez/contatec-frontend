// import { API_BASE_URL } from "../../config/app"
// import parseError from "./parseError"
// import { getKeyByPath } from "./tools"
const baseUrl = "https://contatec.herokuapp.com"
export interface HttpResponse<T> {
  error: any
  data: T | null
}

export const headers = new Headers()
headers.append("Content-Type", "application/json")
headers.append("Accept", "application/json")

export function setAuth(token) {
  headers.delete("Authorization")
  headers.append("Authorization", `Bearer ${token}`)
}

export type Method = "GET" | "PUT" | "DELETE" | "POST"

const signals = new Map()

async function http<T = any>(
  path: string,
  method: Method,
  body?: Record<string, any>
): Promise<HttpResponse<T>> {
  let httpInit
  if (localStorage.getItem("token")) {
    headers.append("Authorization", `Bearer ${localStorage.getItem("token")}`)
    httpInit = {
      headers
    }
  } else {
    httpInit = {
      headers
    }
  }
  const controller = new AbortController()
  signals.set(path, controller)
  try {
    const response = await fetch(`${baseUrl}${path}`, {
      ...httpInit,
      method,
      signal: controller.signal,
      ...(body && { body: JSON.stringify(body) }), // or object
      credentials: "include"
    })

    const data: T = await response.json()

    return { error: null, data }
  } catch (error) {
    return {
      error,
      data: null
    }
  }
}

export async function get(path: string) {
  return http(path, "GET")
}

export async function post(path: string, body: Record<string, any>) {
  return http(path, "POST", body)
}

export async function put(path: string, body: Record<string, any>) {
  return http(path, "PUT", body)
}

export async function del(path: string) {
  return http(path, "DELETE")
}

export async function cancel(path, method, body = undefined) {
  const key = path
  signals.has(key) && signals.get(key).abort()
  return http(path, method, body)
}
