import React, { useState } from "react"
import DatePicker from "react-datepicker"
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css"
import styles from "../styles/components/DatePicker.module.css"
registerLocale('es', es)

export default function DateP() {
  const [startDate, setStartDate] = useState(null)
  return (
    <div>
      <DatePicker
        className={styles.inputDate}
        locale="es"
        placeholderText="Seleccionar fecha"
        selected={startDate}
        dateFormat={"dd/MM/yyyy"}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        onChange={date => setStartDate(date)}
        minDate={new Date()}
        showDisabledMonthNavigation
        isClearable={true}
      />
    </div>
  )
}
