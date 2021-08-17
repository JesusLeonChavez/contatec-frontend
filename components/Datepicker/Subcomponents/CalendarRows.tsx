import { Grid } from "@chakra-ui/react"
import { PropsCalendarRows } from "../type"
import { getWeeks } from "../utilities"
import Day from "./Day"

export default function CalendarRows({
  date,
  viewDate,
  minDate,
  maxDate,
  setDate
}: PropsCalendarRows) {
  return (
    <>
      {getWeeks(viewDate).map((week, i) => (
        <Grid
          // d="grid"
          gridTemplateColumns="repeat(7,1fr)"
          textAlign="center"
          color="gray.800"
          fontSize="sm"
          mt="2"
          key={i}
        >
          {week.map((day, y) => (
            <Day
              key={y}
              viewDate={viewDate}
              minDate={minDate}
              maxDate={maxDate}
              day={day}
              date={date}
              setDate={setDate}
            />
          ))}
        </Grid>
      ))}
    </>
  )
}
