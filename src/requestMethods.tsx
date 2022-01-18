import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGYwMThkZjQ1YjQyNmVhOGZhMjMyNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDIzOTEyNTIsImV4cCI6MTY0MjY1MDQ1Mn0.IoVeEakzIshqdlVgrmbskWVcYwylD3PUyz9bi4EVdEI"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        token: `Bearer ${TOKEN}`
    }
})