import {useState, useEffect} from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import {Product} from './Product';
import {RootStateOrAny, useSelector, useDispatch} from 'react-redux';
import {BallTriangle} from 'react-loader-spinner'
import {CategoryProduct} from './CategoryProduct';
import {getAllProducts} from '../redux/apiCall';

export const Products = ({category, filters, sort}: any) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);
    const dispatch = useDispatch();
    const {loading} = useSelector((state: RootStateOrAny) => state.ui);

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
        <div className="w-full">
            {
                !category && (
                    <h1 className='productsTitle'>Productos Recientes</h1>
                )
            }
            <div className='products' key="products">
                {
                    category ?
                        filteredProducts?.map((product) => {
                            return <CategoryProduct key={product._id} item={product}/>
                        })
                        :
                        products?.slice(0, 8).map((product) => {
                            return <Product key={product._id} item={product}/>
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

    )
}
