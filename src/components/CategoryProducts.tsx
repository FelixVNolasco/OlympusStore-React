import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux/apiCall';
import { BallTriangle } from 'react-loader-spinner';
import { PaginatedProducts } from './Shared/PaginatedProducts';


export const CategoryProducts = ({ category, filters, sort }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);
    const { loading } = useSelector((state: RootStateOrAny) => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const products = await getAllProducts(dispatch, category);
                setProducts(products);
                category &&
                    setfilteredProducts(
                        products.filter((item) =>
                            Object.entries(filters).every(([key, value]) =>
                                item[key].includes(value)
                            )
                        )
                    );
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
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [category, dispatch, filters, sort])




    return (
        <>
            {
                loading ?
                    (
                        <div className='grid justify-items-center'>
                            <BallTriangle
                                height="162"
                                width="162"
                                color='#406882'
                                ariaLabel='loading'
                            />
                        </div>
                    )
                    :
                    (
                        <PaginatedProducts currentProducts={filteredProducts} itemsPerPage={3} />
                    )
            }
        </>
    )
}
