import axios from 'axios';

const BASE_URL = "https://olympus-backend.vercel.app/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGVmZTU1ZDc5NDMzYTEyOWEzM2E5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjMyNTc3MCwiZXhwIjoxNjYyNTg0OTcwfQ.F-Dg3-pyDMiEjIVAnKIm9xHXD5BGTPJb7Se5Zd2IEIo"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
})