// Core
import React, { useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useDispatch,useSelector } from "react-redux";
// Parts
import { Grid } from "@mui/material";
import { DataPicker } from "./DataPicker";
import TextField from "./TextField";
import { Select } from "./Select";
import {Button} from "../Button"
// Engine
import { getDestinationsAsync } from "../../../engine/core/destination/saga/asyncActions";
import { getHotelsAsync } from "../../../engine/core/hotels/saga/asyncActions";
import {selectorsDestinations} from "../../../engine/core/destination/selectors"

const sendButtonhover = {
  "&:hover": {
    backgroundColor: "#2e7d32",
  },
};

export function SearchForm() {
  const dispatch = useDispatch()
  const destinationsItems = useSelector(selectorsDestinations.items)
  const destinationsLoading = useSelector(selectorsDestinations.loading)

  const onSubmit = (values) => {
    dispathc(getHotelsAsync(values))
  }
  useEffect(()=>{
    dispatch(getDestinationsAsync()),[dispatch]
  })
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={5}>
                <Grid item xs={3}>
                  <Field disabled={destinationsLoading} name="destination" label="destination" component={Select} option={destinationsItems} />
                </Grid>
                <Grid item xs={3}>
                  <Field name="check_in" label="check_in " component={DataPicker} />
                </Grid>
                <Grid item xs={3}>
                  <Field name="check_out" label="check_out" component={DataPicker} />
                </Grid>
                <Grid item xs={3}>
                  <Field name="child" label="child" component={TextField} />
                </Grid>
                <Grid item xs={1}>
                  <Button type="submit" xs={1} sx={[{ backgroundColor: "secondary.main", fontSize: "20px" }, sendButtonhover]}>Send</Button>
                </Grid>
              </Grid>
            </Box>
          )
        }}
      />
    </div>
  );
}