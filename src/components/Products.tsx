

import { useState, useEffect } from 'react';
import axios from 'axios';

import { Product } from './Product';

export const Products = ({ category, filters, sort }: any) => {
    console.log(category, filters, sort);

    const [products, setProducts] = useState([]);
    console.log(products);
    const [filteredProducts, setfilteredProducts] = useState([]);


    useEffect(() => {
        const getAllProducts = async () => {
            try {
                const products = await axios.get(category ? `http://localhost:5000/api/products?category=${category}` : 'http://localhost:5000/api/products/');
                // const products = await axios.get(category ? `http://localhost:5000/api/products?category=${category}` : 'https://us-east-1.aws.data.mongodb-api.com/app/olympus-oocpc/endpoint/api/products');
                setProducts(products.data)
            } catch (error) {
                console.log(error);
            }
        }
        getAllProducts();
    }, [category])


    useEffect(() => {
        category &&
            setfilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            );
    }, [products, category, filters])

    useEffect(() => {
        if (sort === "newest") {
            setfilteredProducts((prev) =>
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            )
        } else if (sort === "asc") {
            setfilteredProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            )
        }
        else {
            setfilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])


    return (
        <>
            <div className="container">
                <h1 className='productsTitle'>Productos Recientes</h1>
                <div className='products'>
                    {
                        category ?
                            filteredProducts.map((product) => {
                                return <Product key={product._id} item={product} />
                            })
                            :
                            products.slice(0, 8).map((product) => {
                                return <Product key={product._id} item={product} />
                            })
                    }
                </div>
            </div>
        </>
    )
}
