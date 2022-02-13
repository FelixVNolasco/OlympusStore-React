import { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from './Product';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { removeLoading, setLoading } from '../redux/uiRedux';
import 'react-loading-skeleton/dist/skeleton.css'
import { BallTriangle } from 'react-loader-spinner'
import { CategoryProduct } from './CategoryProduct';

export const Products = ({ category, filters, sort }: any) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);

    const dispatch = useDispatch();
    const { loading } = useSelector((state: RootStateOrAny) => state.ui);

    useEffect(() => {
        const getAllProducts = async () => {
            try {
                dispatch(setLoading());
                // const products = await axios.get(category ? `http://localhost:5000/api/products?category=${category}` : 'http://localhost:5000/api/products/');
                const products = await axios.get(category ? `https://us-east-1.aws.data.mongodb-api.com/app/olympus-oocpc/endpoint/api/products/category?category=${category}` : 'https://us-east-1.aws.data.mongodb-api.com/app/olympus-oocpc/endpoint/api/products');                
                setProducts(products.data);
            } catch (error) {
                dispatch(removeLoading());
            }
            dispatch(removeLoading());
        }
        getAllProducts();
    }, [category, dispatch])




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
                {
                    !category && (
                        <h1 className='productsTitle'>Productos Recientes</h1>
                    )
                }
                <div className='products' key={'HOLAS'}>
                    {
                        category ?
                            filteredProducts.map((product) => {
                                return <CategoryProduct key={product._id?.$oid} item={product} />
                            })
                            :
                            products.slice(0, 8).map((product) => {
                                return <Product key={product._id} item={product} />
                            })
                    }

                    <div className='loadingProducts'>
                        {loading && (
                            <BallTriangle
                                height="162"
                                width="162"
                                color='#406882'
                                ariaLabel='loading'
                            />
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}
