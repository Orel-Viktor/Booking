// Core
import { createAction } from "@reduxjs/toolkit/dist/createAction";

const asyncActions = Object.freeze({
    getHotelsAsync: createAction("GET_HOTELSASYNC")
})

export const { getHotelsAsync } = asyncActions