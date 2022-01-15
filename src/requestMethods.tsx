import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGYwMThkZjQ1YjQyNmVhOGZhMjMyNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDIyMTQyMjksImV4cCI6MTY0MjQ3MzQyOX0.obwueJs6nqtDXymNyaAxdbA4fyKH-VjZdpNTrN1bHAA"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}` }
})