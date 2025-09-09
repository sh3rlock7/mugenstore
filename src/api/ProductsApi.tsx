import axios from 'axios';


export const ProductApi = axios.create({
    baseURL: 'https://dummyjson.com/products'
})
