import axios from 'axios';

const BASE_URL = "https://olympus-backend.vercel.app/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGVmZTU1ZDc5NDMzYTEyOWEzM2E5MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjU5NDM3NiwiZXhwIjoxNjYyODUzNTc2fQ.DBt0v9_llhbmF4cYCkRz5jbxsrMbVTcmIPJJe35Xlyc"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
})