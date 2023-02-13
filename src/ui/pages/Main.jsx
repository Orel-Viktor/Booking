// Core
import React from "react";
import { Form, Field } from "react-final-form";
// Parts
import { Box, Grid } from "@mui/material";
import { DataPicker } from "../components/_Form/DataPicker";

export function Main() {
  const onSubmit = (value) => {
    console.log(value)
  }
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Field name="check_in" label={check_in} component={DataPicker}>

                  </Field>
                </Grid>
              </Grid>
            </Box>
          )
        }}
      />


      <Box component="h6" sx={{ fontSize: "40px", lineHeight: 1, margin: 8 }}>
        Travel with
        <Box component="span" sx={{ color: "primary.main" }}>Booking</Box>
      </Box>
    </div>
  );
}
