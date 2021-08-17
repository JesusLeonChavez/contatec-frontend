import { Box, Flex } from "@chakra-ui/react"
import ZIcon from "../../Icon"
import styles from "./../../../styles/components/Datepicker.module.css"
import { getOptionMonth, getOptionYear, MONTHS, YEARS } from "../utilities"
import {
  PropsSelectorMonth,
  PropsSelectorMonthYear,
  PropsSelectorYear
} from "../type"

function SelectorMonth({ month, onSelect }: PropsSelectorMonth) {
  return (
    <Box className={styles.selector}>
      <select
        onChange={ev => onSelect("month", ev.target.value)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value={getOptionMonth(MONTHS, month).value}
        className={styles.selectorSelectMonth}
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
    <Box className={styles.selector}>
      <select
        onChange={ev => onSelect("year", ev.target.value)}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        value={getOptionYear(YEARS, year).label}
        className={styles.selectorSelectYear}
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
    <Flex
      w="100%"
      alingItems="center"
      justifyContent="space-around"
      pt="0.75rem"
      pb="0.75rem"
      pl="0px"
      pr="0px"
      position="relative"
    >
      <ZIcon size={16} name="arrow-leftv1" onClick={handleLeft} />
      <SelectorMonth month={viewDate.month()} onSelect={onChange} />
      <SelectorYear year={viewDate.year()} onSelect={onChange} />
      <ZIcon size={16} name="arrow-rightv1" onClick={handleRight} />
    </Flex>
  )
}
