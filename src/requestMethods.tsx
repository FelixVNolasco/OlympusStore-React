import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGYwMThkZjQ1YjQyNmVhOGZhMjMyNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDQyNjI5NTgsImV4cCI6MTY0NDUyMjE1OH0.B39EmSNyb-koats1O7mRU4haGtAtnHbJMQQJoKLDenM"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
})