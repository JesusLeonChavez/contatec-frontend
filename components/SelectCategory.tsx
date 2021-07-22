import { Box, Select } from "@chakra-ui/react"
import { useState } from "react"
import styles from "../styles/components/Select.module.css"

interface ISelectCategory {
  width: string
  options: string[]
}

export default function SelectCategory({ width, options }: ISelectCategory) {
  const initialState = {
    option: ""
  }
  const [state, setState] = useState<any>(initialState)

  function handleChange(ev) {
    setState({ value: ev.target.value })
  }

  return (
    <Box w={width} className={styles.select}>
      <Select
        name="option"
        value={state ? state.value : undefined}
        onChange={handleChange}
        placeholder="Elige una alternativa"
        className={styles.selectSelect}
        borderColor="primary"
        color="white"
      >
        {options.map((opt, index) => (
          <option key={index + 1} value={index + 1}>
            {opt}
          </option>
        ))}
      </Select>
    </Box>
  )
}
