import axios from 'axios';

const BASE_URL = "https://olympus-backend.vercel.app/api/";

const token = localStorage.getItem("token");
const id = localStorage.getItem("id");

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${token}`
    },
    params: {
        id: id
    }
})