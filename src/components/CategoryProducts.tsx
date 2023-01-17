import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getAllProductsCategorySort } from '../redux/apiCall';
import { BallTriangle } from 'react-loader-spinner';
import { PaginatedProducts } from './Shared/PaginatedProducts';

export const CategoryProducts = ({ category, filters, sort }) => {

    // const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);
    const { loading } = useSelector((state: RootStateOrAny) => state.ui);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProducts = async () => {
            try {
                let products = await getAllProductsCategorySort(dispatch, category, sort);
                setfilteredProducts(
                    products.filter((item) =>
                        Object.entries(filters).every(([key, value]) =>
                            item[key].includes(value)
                        )
                    )
                );
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
                        <div className='grid justify-items-center mt-36 mb-36'>
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
