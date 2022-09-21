import Swal from 'sweetalert2';
import { SingleProductResponse } from '../interfaces/SingleProduct';
import { publicRequest, userRequest } from '../requestMethods';
import { logout } from './actions/auth';
import { removeLoading, setLoading } from "./uiRedux";
import { startFetching } from './userRedux';

export const getAllProducts = async (dispatch, category: any) => {
    dispatch(setLoading());
    try {
        const products: any = await publicRequest.get(category ? `/products?category=${category}` : '/products');
        const { data } = products;
        dispatch(removeLoading());
        return data;
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}

export const getUserPurchases = async (dispatch, _id: string) => {
    dispatch(setLoading());
    try {
        const purchasesData = await userRequest.get(`/orders/find/${_id}`);
        const { data } = purchasesData;
        dispatch(removeLoading());
        return data;
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}

export const getSingleProduct = async (dispatch, productId: string) => {
    try {
        dispatch(startFetching());
        const product = await publicRequest.get(`/products/find/${productId}`) as SingleProductResponse;
        const { data } = product;
        return data;
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}

// export const getInfoUpdateUser = async(dispatch, id) => {
//     try {
//         dispatch(setLoading());        
//     } catch (error) {
//         dispatch(removeLoading());
//         Swal.fire({
//             icon: "error",
//             title: "Error",
//             text: "No ha sido posible obtener la información",
//         });
//     }
// }

export const updateUser = async (dispatch, values) => {
    try {
        dispatch(setLoading());
        await userRequest.put(`/users/${values.id}`, values);
        Swal.fire({
            icon: "success",
            title: "Exito",
            text: "Tu cuenta ha sido actualizada correctamente",
        });
        dispatch(removeLoading());
    } catch (error) {
        dispatch(removeLoading());
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No ha sido posible actualizar la cuenta",
        });
    }
}

export const deleteUser = async (dispatch, userId: string) => {
    try {
        dispatch(setLoading());
        await userRequest.delete(`/users/${userId}`);
        Swal.fire({
            icon: "success",
            title: "Exito",
            text: "Tu cuenta ha sido eliminada correctamente",
        });
        dispatch(logout());
        dispatch(removeLoading());
    } catch (error) {
        dispatch(removeLoading());
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No ha sido posible eliminar la cuenta",
        });
    }
}