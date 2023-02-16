// Core
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
// Engine
import { destinationReducer } from "../core/destination/slice";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";

const { createReduxHistory, routerMiddleware, routerReducer } =
    createReduxHistoryContext({
        history: createBrowserHistory(),
    });

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        router: routerReducer,
        // hotels
        destination: destinationReducer,
    },
    middleware: () => [routerMiddleware, sagaMiddleware],
});

export const history = createReduxHistory(store);
