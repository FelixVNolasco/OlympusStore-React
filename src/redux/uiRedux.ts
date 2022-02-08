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
        },
        setLoading: (state) => {
            state.loading = true
        },
        removeLoading: (state) => {
            state.loading = false
        },        
    }
})

export const { setError, removeError, setLoading, removeLoading } = cartSlice.actions;
export default cartSlice.reducer;