import { Box, Input, Flex } from "@chakra-ui/react"
import React from "react"
import moment from "moment"
import ZIcon from "../Icon"
import Calendar from "./Subcomponents/Calendar"
import useOut from "./useOut"
import { PropsDatePicker } from "./type"
import "./../../styles/components/Datepicker.module.css"

export default function DatePicker({
  fullWidth = true,
  disabled = false,
  onChange,
  value,
  formatLabel = "DD/MM/YYYY",
  position = "left",
  listPosition = "bottom",
  minDate = null,
  maxDate = null
}: PropsDatePicker) {
  const [date, setDate] = React.useState(value)
  const viewDate = date ? moment(new Date(date.toString())) : moment()
  const { ref, isOpen, setOpen } = useOut([])
  React.useEffect(() => {
    setDate(value)
  }, [value])
  function handleChange(val) {
    if (!value) {
      setDate(val)
    }
    onChange(val)
    setOpen(false)
  }

  function handleClick() {
    if (!isOpen) {
      setOpen(true)
    }
  }

  function handleFocus() {
    setOpen(true)
  }
  return (
    <Box
      h="2.5rem"
      position="relative"
      bg="transparent"
      d="flex"
      alignItems="center"
      justifyContent="center"
      w={`${fullWidth ? "100%" : "20rem"}`}
      pointerEventer={`${disabled} ? 'aplique' : 'no-aplique'}`}
      onClick={handleClick}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
    >
      <Input
        cursor="pointer"
        w={`${fullWidth ? "100%" : "100px"}`}
        onFocus={handleFocus}
        readOnly
        placeholder="Seleccione una fecha"
        value={date ? date.format(formatLabel) : ""}
      />
      <div className="icon">
        <ZIcon name="calendar" size={16} />
      </div>
      <Flex
        w="250px"
        h="250px"
        // bg="red"
        borderStyle="solid"
        borderColor="gray.400"
        position="absolute"
        bg="white"
        boxSizing="border-box"
        zIndex="10"
        userSelect="none"
        flexDirection="column"
        opacity="1"
        className={`${"date"}
        ${position === "left" ? "left: 0px" : "right: 0px"}
        ${listPosition === "top" && "bottom: 2.5rem"}
        ${listPosition === "bottom" && "top: 2.5rem"}
        ${isOpen ? "date1" : "date2"}`}
      >
        <Calendar
          date={date}
          viewDate={viewDate}
          setDate={handleChange}
          minDate={minDate}
          maxDate={maxDate}
        />
      </Flex>
    </Box>
  )
}
