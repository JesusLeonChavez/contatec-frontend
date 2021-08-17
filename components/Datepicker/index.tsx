import { Flex } from "@chakra-ui/react"
import React from "react"
import moment from "moment"
import ZIcon from "../Icon"
import Calendar from "./Subcomponents/Calendar"
import useOut from "./useOut"
import { PropsDatePicker } from "./type"
import styles from "./../../styles/components/Datepicker.module.css"

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
    <Flex
      h="2.5rem"
      position="relative"
      bg="transparent"
      alignItems="center"
      border="1px solid"
      borderColor="gray.200"
      justifyContent="center"
      w={`${fullWidth ? "20rem" : "100%"}`}
      pointerEventer={`${disabled} ? 'aplique' : 'no-aplique'}`}
      onClick={handleClick}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
    >
      <input
        className={`${styles.inputDate} ${fullWidth && "100%"}`}
        onFocus={handleFocus}
        readOnly
        placeholder="Seleccione una fecha"
        value={date ? date.format(formatLabel) : ""}
      />
      <ZIcon className="icon" name="calendar" size={16} />
      <Flex
        w="250px"
        h="300px"
        // bg="red"
        borderWidth="1px"
        borderStyle="solid"
        borderColor="gray.400"
        position="absolute"
        bg="white"
        flexDirection="column"
        opacity="1"
        className={`${styles.date}
        ${listPosition === "top" ? styles.dP3 : ""}
        ${listPosition === "bottom" ? styles.dP4 : ""}
        ${isOpen ? styles.date2 : styles.date1}`}
      >
        <Calendar
          date={date}
          viewDate={viewDate}
          setDate={handleChange}
          minDate={minDate}
          maxDate={maxDate}
        />
      </Flex>
    </Flex>
  )
}
