import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        products: [],
        quantity: 0
    },
    reducers: {
        addFavorite: (state, action) => {
        },
        removeFavorite: (state, action) => {
        },
    }
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
