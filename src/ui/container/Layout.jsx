// Engine
import { store } from "../../engine/config/store";
// Core
import React from "react";
import { Provider } from "react-redux";
import { orange } from "@mui/material/colors";
import { ThemeProvider,createTheme } from "@mui/material/styles"; 




const theme = createTheme({
    palette: {
      primary: {
        main: orange[600],
      },
    },
  });

export function Layout() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
        
        </ThemeProvider>
      </Provider>
    );
  }
  