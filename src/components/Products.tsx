import { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import { getAllProducts } from '../redux/apiCall';
import { ProductsMap } from './Shared/ProductsMap';
import { PaginatedProducts } from './Shared/PaginatedProducts';
import { Search } from './Shared/Search';

export const Products = ({ category, filters, sort }: any) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);
    const dispatch = useDispatch();
    const { loading } = useSelector((state: RootStateOrAny) => state.ui);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await getAllProducts(dispatch, category);
                setProducts(products);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
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
        } else {
            setfilteredProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            )
        }
    }, [sort])


    return (
        <>
            {
                category ?
                    <PaginatedProducts currentProducts={filteredProducts} itemsPerPage={3} />
                    :
                    <>
                        <div className="flex flex-col w-5/6 md:1/2 lg:w-2/3 xl:w-1/3 mx-auto">
                            <h4 className='productsTitle text-center text-2xl'>Buscar Productos</h4>
                            <Search />
                        </div>
                        <h1 className='productsTitle'>Productos Recientes</h1>
                        <ProductsMap currentProducts={products?.slice(0, 6)} />
                    </>
            }
            <div className=' flex items-center justify-center m-20'>
                {loading && (
                    <BallTriangle
                        height="162"
                        width="162"
                        color='#406882'
                        ariaLabel='loading'
                    />
                )}
            </div>
        </>
    )
}
