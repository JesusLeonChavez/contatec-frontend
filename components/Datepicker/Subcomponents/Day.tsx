import { Box } from "@chakra-ui/react"
import { PropsDay } from "../type"
import styles from "../../../styles/components/Datepicker.module.css"

export default function Day({
  day,
  date,
  minDate,
  maxDate,
  viewDate,
  setDate
}: PropsDay) {
  function handleSelect(_day) {
    setDate(_day)
  }
  let active = false
  if (date) {
    active = day.format("DD-MM-YYYY") === date.format("DD-MM-YYYY")
  }
  let disabledMin = false
  if (minDate) {
    const m = minDate.format("YYYY-MM-DD")
    disabledMin = day.isBefore(m)
  }
  let disabledMax = false
  if (maxDate) {
    const m = maxDate.format("YYYY-MM-DD")
    disabledMax = day.isAfter(m)
  }
  // eslint-disable-next-line no-unused-vars
  const otherMonth = viewDate.month() !== day.month()
  return (
    <Box
      fontSize="1rem"
      lineHeight="1.5rem"
      h="1.5rem"
      w="100%"
      m="auto"
      cursor="pointer"
      borderRadius="9999px"
      className={`${styles.daySelect} ${active && styles.active} ${
        (disabledMin || disabledMax) && styles.disable
      } ${otherMonth && styles.otherMonths}`}
      onClick={() => handleSelect(day)}
    >
      {day.date()}
    </Box>
  )
}
