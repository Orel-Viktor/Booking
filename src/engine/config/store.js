// Core
import { configureStore } from "@reduxjs/toolkit"
// Ebgine
import destination from "../core/destination/slice"


const store = configureStore({
    reducer: {
        // hotels
        destination
    },
    middleware: () => []


})
export default store