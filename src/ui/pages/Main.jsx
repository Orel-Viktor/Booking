import React from "react";
import { Form, Field } from "react-final-form";
// Parts
import { Box, Grid } from "@mui/material";
import { DataPicker } from "../components/_Form/DataPicker";
import TextField from "../components/_Form/TextField";
import { Button } from "../components/Button";
import { Select } from "../components/_Form/Select";

const sendButtonhover = {
  "&:hover": {
   backgroundColor:"#2e7d32",
  },
};

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
              <Grid container spacing={5}>
                <Grid item xs={3}>
                  <Field name="destination" label="destination"component={Select} option={[]}/>
                </Grid>
                <Grid item xs={3}>
                  <Field name="check_in" label="check_in "component={DataPicker}/>
                </Grid>
                <Grid item xs={3}>
                  <Field name="check_out" label="check_out" component={DataPicker}/>
                </Grid>
                <Grid item xs={3}>
                  <Field name="child" label="child" component={TextField}/>
                </Grid>
                 <Grid item xs={1}>
                 <Button type="submit" xs={1}  sx={[{ backgroundColor:"secondary.main", fontSize:"20px"},sendButtonhover]}>Send</Button>
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
