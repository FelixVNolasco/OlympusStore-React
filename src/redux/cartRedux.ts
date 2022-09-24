import { createSlice } from '@reduxjs/toolkit'
import Swal from 'sweetalert2';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
            Swal.fire({
                icon: "success",
                title: "Exito",
                text: "Se ha agregado correctamente el producto",
            });
        },
        sustractProduct: (state, action) => {
            state.quantity -= 1;
            state.total += action.payload.price * action.payload.quantity
        },
        cleanCart: (state, action) => {
            state.products = action.payload.products;
            state.quantity = action.payload.quantity;
            state.total = action.payload.total;
        }
    }
})

export const { addProduct, sustractProduct, cleanCart } = cartSlice.actions;
export default cartSlice.reducer;
