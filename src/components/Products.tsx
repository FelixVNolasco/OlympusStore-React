import { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import { Product } from './Product';
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
                        <section className='grid justify-items-center mb-64'>
                            <div className="grid grid-cols-1 gap-2 w-10/12 md:w-8/12 lg:w-6/12">
                                <h4 className='productsTitle text-center text-3xl font-semibold'>Buscar Productos</h4>
                                <Search />
                            </div>
                        </section>
                        <section className='grid gap-4 justify-items-center mb-64'>
                            <h1 className='text-4xl text-gray-800 font-bold'>Productos Recientes</h1>
                            <ProductsMap currentProducts={products?.slice(0, 6)} />
                        </section>
                    </>
            }
            
                {loading && (
                <div className='grid justify-items-center mb-64'>
                    <BallTriangle
                        height="162"
                        width="162"
                        color='#406882'
                        ariaLabel='loading'
                    />
                </div>
                )}
            
        </>
    )
}
