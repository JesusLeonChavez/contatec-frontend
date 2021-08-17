import { Box, Grid } from "@chakra-ui/react"
import React from "react"
import { PropsCalendar } from "../type"
import { DAYS } from "../utilities"
import CalendarRows from "./CalendarRows"
import SelectorMonthYear from "./SelectorMonthYear"

function Days() {
  return (
    <Grid
      w="100%"
      gridTemplateColumns="repeat(7,1fr)"
      gridTemplateRows="repeat(1,1fr)"
      color="gray.800"
      lineHeight="1rem"
      textAlign="center"
    >
      {DAYS.map((DAY, i) => (
        <Box
          fontSize="sm"
          lineHeight="1.5rem"
          h="1,5rem"
          w="100%"
          borderRadius="9999px"
          m="auto"
          outline="2px solid transparent"
          // outline="none"
          fontWeight="700"
          key={i}
        >
          {DAY}
        </Box>
      ))}
    </Grid>
  )
}

export default function Calendar({
  date,
  viewDate,
  setDate,
  minDate,
  maxDate
}: PropsCalendar) {
  const [render, setRender] = React.useState(false)
  function handleBack(left) {
    if (left) {
      viewDate.subtract(1, "month")
    } else {
      viewDate.add(1, "month")
    }
    setRender(!render)
  }
  function handleChange(type, option) {
    if (type === "month") {
      viewDate.month(option - 1)
    } else if (type === "year") {
      viewDate.year(parseInt(option))
    }
    setRender(!render)
  }
  return (
    <Box minW="min-content" w="100%" py="2" px="3">
      <SelectorMonthYear
        viewDate={viewDate}
        onBack={handleBack}
        onChange={handleChange}
      />
      <Days />
      <CalendarRows
        date={date}
        viewDate={viewDate}
        setDate={setDate}
        minDate={minDate}
        maxDate={maxDate}
      />
    </Box>
  )
}
