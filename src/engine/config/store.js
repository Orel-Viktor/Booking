// Core
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
// Engine
import { destinationsReducer } from "../core/destination/slice";
import { hotelsReducer } from "../core/hotels/slice";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";
import rootSaga from "./rootSaga";

const { createReduxHistory, routerMiddleware, routerReducer } =
    createReduxHistoryContext({
        history: createBrowserHistory(),
    });

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        router: routerReducer,
        hotels: hotelsReducer,
        destinations: destinationsReducer,
    },
    middleware: () => [routerMiddleware, sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export const history = createReduxHistory(store);
