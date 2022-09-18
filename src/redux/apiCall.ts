import Swal from 'sweetalert2';
import { publicRequest, userRequest } from '../requestMethods';
import { removeLoading, setLoading } from "./uiRedux";

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
        dispatch(setLoading());
        const product = await publicRequest.get(`/products/find/${productId}`);
        const { data } = product;
        dispatch(removeLoading());
        return data;
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}


export const updateUser = async (dispatch, userId: string, newInfo) => {

    try {
        dispatch(setLoading());
        await userRequest.put(`/users/${userId}`, newInfo);
        Swal.fire({
            icon: "success",
            title: "Exito",
            text: "Tu cuenta ha sido actualizada correctamente",
        });
        dispatch(removeLoading());
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}