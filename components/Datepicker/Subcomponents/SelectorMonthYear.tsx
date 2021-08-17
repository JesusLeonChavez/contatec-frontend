import { Box } from "@chakra-ui/react"
import ZIcon from "../../Icon"
import "./../../../styles/components/Datepicker.module.css"
import { getOptionMonth, getOptionYear, MONTHS, YEARS } from "../utilities"
import {
  PropsSelectorMonth,
  PropsSelectorMonthYear,
  PropsSelectorYear
} from "../type"

function SelectorMonth({ month, onSelect }: PropsSelectorMonth) {
  return (
    <Box className="selector">
      <select
        onChange={ev => onSelect("month", ev.target.value)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value={getOptionMonth(MONTHS, month).value}
        className="select select-bordered select-xs selector-select-month"
      >
        {MONTHS.map((_month, i) => (
          <option key={i} value={(i + 1).toString()}>
            {_month}
          </option>
        ))}
      </select>
    </Box>
  )
}

function SelectorYear({ year, onSelect }: PropsSelectorYear) {
  return (
    <Box className="selector">
      <select
        onChange={ev => onSelect("year", ev.target.value)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value={getOptionYear(YEARS, year).label}
        className="select select-bordered select-xs selector-select-year"
      >
        {YEARS.map((_year, i) => {
          return (
            <option key={i} value={Number(_year)}>
              {_year}
            </option>
          )
        })}
      </select>
    </Box>
  )
}

export default function SelectorMonthYear({
  viewDate,
  onBack,
  onChange
}: PropsSelectorMonthYear) {
  function handleLeft() {
    onBack(true)
  }
  function handleRight() {
    onBack(false)
  }
  return (
    <Box
      w="100%"
      d="flex"
      alingItems="center"
      justifyContent="space-around"
      py="3"
      px="0"
      position="relative"
    >
      <ZIcon name="arrow-leftv2" onClick={handleLeft} />
      <SelectorMonth month={viewDate.month()} onSelect={onChange} />
      <SelectorYear year={viewDate.year()} onSelect={onChange} />
      <ZIcon name="arrow-right" onClick={handleRight} />
    </Box>
  )
}
