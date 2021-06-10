export interface HttpResponse<T> {
  error: any
  data: T | null
  cancel: () => void
}

export const headers = new Headers()
headers.append('Content-Type', 'application/json')
headers.append('Accept', 'application/json')
export const httpInit = {
  headers
}
export type Method = 'GET' | 'PUT' | 'DELETE' | 'POST'

async function http<T = any>(
  path: string,
  method: Method,
  body?: Record<string, any>
): Promise<HttpResponse<T>> {
  const controller = new AbortController()
  try {
    const response = await fetch(`${http.baseUrl}${path}`, {
      ...httpInit,
      method,
      signal: controller.signal,
      ...(body && { body: JSON.stringify(body) }) // or object
    })

    const data: T = await response.json()

    return { error: null, data, cancel: () => controller.abort() }
  } catch (error) {
    return {
      error,
      data: null,
      cancel: () => controller.abort()
    }
  }
}

http.baseUrl = ''

export async function get<T>(path: string): Promise<HttpResponse<T>> {
  return http(path, 'GET')
}

export async function post(path: string, body: Record<string, any>) {
  return http(path, 'POST', body)
}

export async function put(path: string, body: Record<string, any>) {
  return http(path, 'PUT', body)
}

export async function del(path: string) {
  return http(path, 'DELETE')
}
