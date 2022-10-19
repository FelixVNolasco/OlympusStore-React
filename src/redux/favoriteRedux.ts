import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {
        products: [],
        quantity: 0
    },
    reducers: {
        addFavorite: (state, action) => {
            if (action.payload.size !== "") {
                state.quantity += 1;
                state.products.push(action.payload)
                Swal.fire({
                    icon: "success",
                    title: "Exito",
                    text: "Se ha favoriteado exitosamente",
                });
            } else {
                Swal.fire({
                    icon: "warning",
                    title: "Advertencia",
                    text: "Debes escoger un número",
                });
            }
        },
        removeFavorite: (state, action) => {
            //TODO: REMOVE ONLY SPECIFIC ELEMENT, NO FILTER THEM ALL
            // (state.quantity === 0) ? state.quantity = 0 : state.quantity--;
            // const nextProducts = state.products.filter(product => product._id !== action.payload._id);
            // state.products = nextProducts;
            // state.total -= action.payload.price * action.payload.quantity;
        },
        cleanCart: (state, action) => {
            // state.products = action.payload.products;
            // state.quantity = action.payload.quantity;
            // state.total = action.payload.total;
        }
    }
})

export const { addFavorite, removeFavorite, cleanCart } = favoriteSlice.actions;
export default favoriteSlice.reducer;
