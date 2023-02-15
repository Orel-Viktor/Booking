// Core
import React from 'react';
// Parts
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker as DatePickerMUI } from '@mui/x-date-pickers/DatePicker';


export function DataPicker(props) {
  const { label, input } = props
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerMUI
        inputFormat= "MM/DD/YY"
        label={label}
        {...input}
        value={input.value || null}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}