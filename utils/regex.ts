export function regexEmail(email: string) {
  const regex =
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/

  return regex.test(email)
}
export function regexOnlyString(string: string) {
  const regex =
    // eslint-disable-next-line no-useless-escape
    /^[A-Za-z]+/

  return regex.test(string)
}

export function regexNumberLetters(string: string) {
  const regex = /[a-z,A-Z,0-9]/

  return regex.test(string)
}

export function regexDecimal(number: string) {
  const regex = /^[0-9]{1,5}$|^[0-9]{1,5}\.[0-9]{1,5}$/
  return regex.test(number)
}
