import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: "ui",
    initialState: {
        loading: false,
        errors:  ""
    },
    reducers: {
        setError: (state, action ) => {
            state.errors = action.payload
        },
        removeError: (state) => {
            state.errors = ""
        }
    }
})

export const { setError, removeError } = cartSlice.actions;
export default cartSlice.reducer;