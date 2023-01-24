// Core
import { configureStore } from "@reduxjs/toolkit"
// Engine
import { destinationReducer } from "../core/destination/slice"


const store = configureStore({
    reducer: {
        // hotels
        destination: destinationReducer
    },
    middleware: () => []


})
export default store