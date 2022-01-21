import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        products: [],
        favoriteCount: 0
    },
    reducers: {
        addProductFavorite: (state, action) => {
            state.products.push(action.payload)
            state.favoriteCount = state.products.length
        },
        // removeFavoriteProduct: (state, action) => {
        //     state.quantity -= 1;
        //     // state.products.
        // }
    }
})

export const { addProductFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;