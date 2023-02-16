import { createSlice } from "@reduxjs/toolkit"

const destinations = createSlice({
    name: "destinations",
    initialState: {
        items: [],
        loading: true,
    },
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },    
    }
})


export const { setItems, setLoading } = destinations.actions
export const destinationsReducer = destinations.reducer