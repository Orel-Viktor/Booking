// Core
import React from "react";
// Parts
import { Box } from "@mui/material";
import { SearchForm } from "../components/_Form/SearchForm";

export function Main() {
  return (
    <div>
      <SearchForm></SearchForm>
      <Box component="h6" sx={{ fontSize: "40px", lineHeight: 1, margin: 8 }}>
        Travel with
        <Box component="span" sx={{ color: "primary.main" }}>Booking</Box>
      </Box>
    </div>
  );
}
