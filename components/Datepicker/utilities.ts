// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import moment, { isMoment } from "moment"

export const DAYS = ["L", "M", "M", "J", "V", "S", "D"]

export const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
]

export const YEARSRANGE = [1990, moment().get("year") + 20]

export const YEARS = createYears(YEARSRANGE)

function getDaysBeforeStart(firstDayOfMonth) {
  const fourtyTwoDays = []
  const dayBeforeFirstDayOfMonth = firstDayOfMonth.day() - 1
  if (dayBeforeFirstDayOfMonth === -1) {
    for (let i = 6; i > 0; i--) {
      let firstDayOfMonthCopy = firstDayOfMonth.clone()
      firstDayOfMonthCopy = firstDayOfMonthCopy.subtract(i, "d")
      fourtyTwoDays.push(firstDayOfMonthCopy)
    }
  }
  if (dayBeforeFirstDayOfMonth === 0) {
    for (let i = 7; i > 0; i--) {
      let firstDayOfMonthCopy = firstDayOfMonth.clone()
      firstDayOfMonthCopy = firstDayOfMonthCopy.subtract(i, "d")
      fourtyTwoDays.push(firstDayOfMonthCopy)
    }
  } else {
    for (let i = dayBeforeFirstDayOfMonth; i > 0; i--) {
      let firstDayOfMonthCopy = firstDayOfMonth.clone()
      firstDayOfMonthCopy = firstDayOfMonthCopy.subtract(i, "d")
      fourtyTwoDays.push(firstDayOfMonthCopy)
    }
  }
  return fourtyTwoDays
}

function getDaysForWeek(initMonth, initYear) {
  let fourtyTwoDays = []
  const firstDayOfMonth = moment(new Date(initYear, initMonth, 1))
  fourtyTwoDays = getDaysBeforeStart(firstDayOfMonth)
  for (let i = 0; i < firstDayOfMonth.daysInMonth(); i++) {
    fourtyTwoDays.push(firstDayOfMonth.clone().add(i, "d"))
  }
  const lastDayOfMonth = moment(
    new Date(initYear, initMonth, firstDayOfMonth.daysInMonth())
  )
  let toAdd = 1
  while (fourtyTwoDays.length < 42) {
    fourtyTwoDays.push(lastDayOfMonth.clone().add(toAdd, "d"))
    toAdd++
  }
  return fourtyTwoDays
}

export function getWeeks(date) {
  let _date = {}
  if (isMoment(date)) {
    _date = date
  } else {
    _date = moment()
  }
  const weeks = []
  for (let i = 0; i < 6; i++) {
    const startIndex = i * 7
    const endIndex = (i + 1) * 7
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rowDays = getDaysForWeek(_date.month(), _date.year()).slice(
      startIndex,
      endIndex
    )
    weeks.push(rowDays)
  }
  return weeks
}

function createYears(yearsRange) {
  const years = []
  const start = yearsRange[0]
  const end = yearsRange[1]
  for (let i = start; i <= end; i++) {
    years.push(i.toString())
  }
  return years
}

export function getOptionMonth(array, date) {
  const finded = array[date]
  const i = array.indexOf(finded)
  return { label: finded, value: i + 1 }
}

export function getOptionYear(array, date) {
  const i = array.indexOf(date.toString())
  return { label: date, value: i + 1 }
}
