// Core
import { configureStore } from "@reduxjs/toolkit";
// Engine
import { destinationReducer } from "../core/destination/slice";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

export const store = configureStore({
  reducer: {
    routerReducer,
    // hotels
    destination: destinationReducer,
  },
  middleware: () => [routerMiddleware],
});

export const history = createReduxHistory(store);
