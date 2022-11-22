import { FaPlus, FaMinus, FaExclamationCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import { getProduct } from '../redux/apiCall';
import ReactTooltip from 'react-tooltip';
import { Product } from '../interfaces/SingleProduct';
import { motion } from 'framer-motion';
import { addCartProduct, isSingleProduct } from '../helpers/singleProductHelpers';

const SingleProduct = () => {

    const location = useLocation();
    const dispatch = useDispatch()
    const productId = location.pathname.split("/")[2];
    const { isFetching } = useSelector((state: RootStateOrAny) => state.user);
    const { isAuthenticated } = useSelector((state: RootStateOrAny) => state.user);
    const [product, setProduct] = useState<Product | undefined>();
    const [quantity, setQuantity] = useState<number>(1);
    const [size, setSize] = useState<string>("");

    useEffect(() => {
        async function getSingleProduct() {
            const singleProduct = await getProduct(dispatch, productId);
            if (singleProduct && isSingleProduct(singleProduct)) {
                setProduct(singleProduct);
            }
        }
        getSingleProduct();
    }, [productId, dispatch])

    const handleQuantity = (type: string) => {
        if (type === "inc") {
            setQuantity(quantity + 1)
        } else {
            quantity > 1 &&
                setQuantity(quantity - 1)
        }
    }
    
    return (
        <>
            {
                !isFetching ? (
                    <motion.main className="grid justify-items-center lg:mt-32 xl-mt-64 mb-64" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 w-10/12 2xl:w-9/12 items-center">
                            <div className='grid grid-cols-1 justify-items-center lg:justify-items-start shadow-lg'>
                                <img className='rounded-lg' src={product?.img} alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h2 className='text-4xl text-center lg:text-left text-gray-800 font-semibold'>{product?.title}</h2>
                                <div className='flex gap-4 mt-1 mb-4'>
                                    {product?.categories.map((category: string) => {
                                        return <span key={category} className="px-1 rounded-md bg-gray-300">{category}</span>
                                    })}
                                </div>
                                <p className='text-lg'>{product?.desc}</p>
                                <div className="flex justify-end mb-4">
                                    <p className='text-lg font-semibold'>${product?.price}</p>
                                </div>
                                <div className="flex flex-col w-full items-center mb-4">
                                    <p className='optionText'>Selecciona tu talla:</p>
                                    <select className='border-slate-400 border-2 rounded-md w-3/4' name="" onChange={(e) => setSize(e.target.value)}>
                                        {
                                            product?.size.map((size) => {
                                                return <option value={size} key={size}>{size}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="flex justify-center items-center gap-4 mb-4">
                                    <FaMinus className='cursor-pointer' onClick={() => handleQuantity("dec")} />
                                    <span className='text-lg'>{quantity}</span>
                                    <FaPlus className='cursor-pointer' onClick={() => handleQuantity("inc")} />
                                </div>
                                <div className="flex justify-center items-center gap-4 transition ease-in-out duration-150">
                                    <button onClick={() => addCartProduct(dispatch, product, quantity, size)} disabled={!isAuthenticated} className='text-stone-50 bg-gray-800 w-full p-2 rounded-md font-semibold cursor-pointer disabled:bg-gray-400 disabled:text-gray-600 disabled:cursor-not-allowed'>Añadir al Carrito</button>
                                    {
                                        !isAuthenticated &&
                                        <>
                                            <FaExclamationCircle data-tip data-for='tooltip' className='tooltip' />
                                            <ReactTooltip id='tooltip' type='warning' backgroundColor='black' textColor='white'>
                                                <span>Para realizar compras, en necesario iniciar sesión.</span>
                                            </ReactTooltip>
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </motion.main>
                )
                    :
                    (
                        <div className='grid justify-items-center lg:mt-32 xl-mt-64 mb-64'>
                            <BallTriangle
                                height="162"
                                width="162"
                                color='#406882'
                                ariaLabel='loading' />
                        </div>
                    )
            }
        </>

    )
}

export default SingleProduct;