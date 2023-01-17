import Swal from 'sweetalert2';
import { SingleProductResponse } from '../interfaces/SingleProduct';
import { publicRequest } from '../requestMethods';
import { removeLoading, setLoading } from "./uiRedux";
import { startFetching } from './userRedux';
import axios from 'axios';

const BASE_URL = "https://olympus-backend.vercel.app/api";

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


export const getAllProductsCategorySort = async (dispatch, category: string, sort: string) => {
    dispatch(setLoading());
    try {        
        if (sort === "newest") {
            const products: any = await publicRequest.get(`/products?category=${category}&new=${true}`);
            console.log(products);
            const { data } = products;
            dispatch(removeLoading());
            return data;
        } else if (sort === "asc") {
            const products: any = await publicRequest.get(`/products?category=${category}&asc=true`);            
            const { data } = products;
            dispatch(removeLoading());
            return data;
        } else {
            const products: any = await publicRequest.get(`/products?category=${category}&dsc=true`);
            const { data } = products;
            dispatch(removeLoading());
            return data;
        }
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}

export const getUserPurchases = async (dispatch, id: string) => {
    dispatch(setLoading());
    try {
        const purchasesData = await axios.get(`https://olympus-backend.vercel.app/api/orders/find/${id}`);
        const { data } = purchasesData;
        dispatch(removeLoading());
        return data;
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}


export const makePurchaseRequest = async (dispatch, stripeData, userId: string, accessToken: string) => {
    dispatch(setLoading());
    try {
        const purchaseRequest = await axios.post(`${BASE_URL}/checkout/payment`, stripeData, { params: { id: userId }, headers: { token: `Bearer ${accessToken}` } })
        const { data } = purchaseRequest;
        dispatch(removeLoading());
        return data;
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}


export const successPurchaseRequest = async (dispatch, stripeData, userId: string, accessToken: string) => {
    dispatch(setLoading());
    try {
        const purchaseRequest = await axios.post(`${BASE_URL}/orders`, stripeData, { params: { id: userId }, headers: { token: `Bearer ${accessToken}` } })
        const { data } = purchaseRequest;
        dispatch(removeLoading());
        return data;
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}

export const cancelPurchase = async (dispatch, id: string, refreshPage) => {
    dispatch(setLoading());
    try {
        const response = await axios.delete(`${BASE_URL}/orders/${id}`);
        const { data } = response;
        dispatch(removeLoading());
        if (data === "Order has been deleted...") {
            Swal.fire({
                icon: "success",
                title: "Éxito",
                text: "Tu compra ha sido cancelada correctamente",
                confirmButtonColor: "3085d6",
                confirmButtonText: "Ok",
                didClose: () => refreshPage()
            });
        }
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
