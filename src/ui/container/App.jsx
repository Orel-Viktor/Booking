// Core
import { Provider } from "react-redux";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";
// Engine
import { store, history } from "../../engine/config/store";
import { pages } from "../../engine/config/routers";
// Styles
import "../../../styles/App.css";
import { orange } from "@mui/material/colors";
// Pages


const theme = createTheme({
  palette: {
    primary: {
      main: orange[600],
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HistoryRouter history={history}>
          <Routes>
            {pages.map(route => <Route path={route.path} element={route.element} />)}
          </Routes>
        </HistoryRouter>
        App
      </ThemeProvider>
    </Provider>
  );
}

export default App;
