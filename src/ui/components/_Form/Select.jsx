// Core
import React from "react"
// Parts
import { InputLabel, MenuItem, FormControl } from "@mui/material"
import SelectMUI from "@mui/material/Select"


export function Select(props) {
    const { option, label, input, disabled } = props
    return (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <SelectMUI
            {...input}
            label={label}
            disabled={disabled}
            >
                {option.map(item=>(<MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>))}
            </SelectMUI>
        </FormControl>
    )

    
}