import { Moment } from "moment"

export interface PropsDatePicker {
  fullWidth?: boolean
  disabled?: boolean
  helper?: string
  onChange: (a: Moment) => void
  value?: Moment | undefined | null
  formatLabel?: string
  position?: string
  listPosition?: string
  minDate?: Moment | undefined | null
  maxDate?: Moment | undefined | null
}

export interface PropsSelectorMonth {
  month: string | number
  onSelect: (type: string, option: string) => void
}

export interface PropsSelectorYear {
  year: string | number
  onSelect: (type: string, option: string) => void
}

export interface PropsSelectorMonthYear {
  viewDate: Moment
  onBack: (left: boolean) => void
  onChange: (type: string, option: string) => void
}

export interface PropsCalendar {
  date: Moment | undefined | null
  viewDate: Moment
  setDate: (date: Moment) => void
  minDate: Moment | undefined | null
  maxDate: Moment | undefined | null
}

export interface PropsCalendarRows {
  date: Moment | undefined | null
  viewDate: Moment
  setDate: (date: Moment) => void
  minDate?: Moment | undefined | null
  maxDate?: Moment | undefined | null
}

export interface PropsDay {
  day: Moment
  date: Moment | undefined | null
  minDate: Moment | undefined | null
  maxDate: Moment | undefined | null
  viewDate: Moment
  setDate: (date: Moment) => void
}
