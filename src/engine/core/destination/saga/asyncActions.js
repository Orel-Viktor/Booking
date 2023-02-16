// Core
import { createAction } from "@reduxjs/toolkit/dist/createAction";

const asyncActions = Object.freeze({
    getDestinationsAsync: createAction("GET_DESTINATION_ASYNC")
})

export const { getDestinationsAsync } = asyncActions