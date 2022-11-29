import { SingleProductResponse, Product, ProductsResponse } from '../interfaces/SingleProduct';
import { publicRequest } from '../requestMethods';
import { removeLoading, setLoading } from "./uiRedux";
import { doneFetching, startFetching } from './userRedux';
import { successCancelPurchaseMessage } from '../helpers/sweetActions';
import { Purchase, UserPurchaseReponse } from '../interfaces/purchase';
import { Order, OrderResponse } from '../interfaces/order';
import { Payment, PaymentResponse } from '../interfaces/payment';
import { CategoryResponse } from '../interfaces/Category';
import { Category } from '../interfaces/Category';

export const getAllProducts = async (dispatch, category: any): Promise<Product[]> => {
    dispatch(setLoading());
    try {
        const products = await publicRequest.get(category ? `/products?category=${category}` : '/products') as ProductsResponse;
        const { data } = products;
        dispatch(removeLoading());
        return data;
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}

export const getProduct = async (dispatch, productId): Promise<Product> => {
    try {
        const product = await getSingleProduct(dispatch, productId);
        dispatch(doneFetching());
        window.scrollTo(0, 0);
        return product;
    } catch (error) {
        console.log(error);
    }
}


export const getSingleProduct = async (dispatch, productId: string): Promise<Product> => {
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


export const getUserPurchases = async (dispatch, id: string): Promise<Purchase[]> => {
    dispatch(setLoading());
    try {
        const purchasesData = await publicRequest.get(`/orders/find/${id}`) as UserPurchaseReponse;
        const { data } = purchasesData;
        dispatch(removeLoading());
        return data;
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}

export const makePurchaseRequest = async (dispatch, stripeData, userId: string, accessToken: string): Promise<Payment> => {
    dispatch(setLoading());
    try {
        const purchaseRequest = await publicRequest.post('/checkout/payment', stripeData, { params: { id: userId }, headers: { token: `Bearer ${accessToken}` } }) as PaymentResponse;
        const { data } = purchaseRequest;
        dispatch(removeLoading());
        return data;
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}

export const successPurchaseRequest = async (dispatch, stripeData, userId: string, accessToken: string): Promise<Order> => {
    dispatch(setLoading());
    try {
        const purchaseRequest = await publicRequest.post('/orders', stripeData, { params: { id: userId }, headers: { token: `Bearer ${accessToken}` } }) as OrderResponse;
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
        const response = await publicRequest.delete(`/orders/${id}`);
        const { data } = response;
        dispatch(removeLoading());
        if (data === "Order has been deleted...") {
            successCancelPurchaseMessage(refreshPage);
        }
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}

export const getCategories = async (dispatch): Promise<Category[]> => {
    dispatch(setLoading());
    try {
        const categoryResponse = await publicRequest.get("/categories") as CategoryResponse;
        const { data } = categoryResponse;
        dispatch(removeLoading());
        return data
    } catch (error) {
        dispatch(removeLoading());
        console.log(error);
    }
}
