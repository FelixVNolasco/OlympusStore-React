import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { cleanCart, plusProduct, removeProduct, restProduct } from '../redux/cartRedux';
import { EmptyCart } from '../components/Shared/EmptyCart';
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { removeLoading, setLoading } from '../redux/uiRedux';
import { makePurchaseRequest } from '../redux/apiCall';
import { motion } from 'framer-motion';

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state: RootStateOrAny) => state.cart);
    const { _id, accessToken } = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const { products } = useSelector((state: RootStateOrAny) => state.cart);
    const stripeKey = process.env.REACT_APP_STRIPE_KEY;
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token)
    }


    useEffect(() => {
        const makeRequest = async () => {
            try {
                dispatch(setLoading());
                const stripeData = {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                }

                const data = await makePurchaseRequest(dispatch, stripeData, _id, accessToken);
                dispatch(removeLoading());
                navigate("/success", {
                    state: {
                        stripeData: data,
                        cart: cart
                    },
                });
            } catch (error) {
                dispatch(removeLoading());
                console.log(error);
            }
        }

        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate, cart, _id, accessToken, dispatch])

    const handleCleanCart = async () => {
        Swal.fire({
            title: '¿Estas seguro de limpiar el carrito?',
            text: "Esto borrará todos los productos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(cleanCart({
                    products: [],
                    quantity: 0,
                    total: 0
                }));
            }
        })
    }

    const handleRemoveProduct = async (product) => {
        Swal.fire({
            title: '¿Estas seguro de remover este producto?',
            text: "Se removerán todos los productos iguales",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si',
            cancelButtonText: "No"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeProduct(product));
            }
        })
    }

    return (
        <motion.main className='flex flex-col items-center mt-4 mb-auto' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {
                products.length !== 0 ?
                    <>
                        <div className="flex flex-col gap-2 mb-4 md:mb-0 md:gap-0 sm:flex-row items-center justify-between w-10/12 2xl:w-9/12 justify-items-center">
                            <Link to={"/"}>
                                <div className="px-2 py-1 bg-orange-300 rounded-md">Continuar Comprando</div>
                            </Link>
                            <div className="topTexts">
                                <span className="topText">Bolsa de compras ({products.length})</span>
                            </div>
                            <button className="px-2 py-1 bg-red-400 rounded-md" onClick={handleCleanCart}>Limpiar Carrito</button>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 w-10/12 2xl:w-9/12 items-center justify-items-center">
                            <div className="w-full">
                                {
                                    products.map((product) => (
                                        <div className="product" key={product._id.$oid}>
                                            <div className="flex items-center justify-between gap-4">
                                                <div className='flex flex-col md:flex-row  items-center'>
                                                    <img className='w-32' src={product?.img}
                                                        alt="" />
                                                    <div className="ml-4 flex flex-col">
                                                        <span
                                                            className='font-semibold'
                                                        >{`${product.title.substring(0, 40)}...`}</span>
                                                        <div className="flex justify-between">
                                                            <span
                                                            >{`Talla ${product.size}`}</span>
                                                            <div className="flex ml-4 items-center gap-1">
                                                                <FaMinus className='cursor-pointer'
                                                                    onClick={() => dispatch(restProduct(product))} />
                                                                <span
                                                                    className='flex flex-col text-center'>{`Cantidad: ${product.quantity}`}</span>
                                                                <FaPlus className='cursor-pointer'
                                                                    onClick={() => dispatch(plusProduct(product))} />
                                                            </div>
                                                        </div>
                                                        <FaTrash className='mt-2 hover:text-red-400 cursor-pointer' onClick={() => handleRemoveProduct(product)} />
                                                    </div>
                                                </div>
                                                <div
                                                    className=" w-1/6text-xl font-semibold">{`$ ${product.price * product.quantity}`}</div>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="w-2/3 p-2 rounded-md">
                                <h1 className='mb-4 text-2xl'>Resumen</h1>
                                <div className="flex  justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>${cart.total}</span>
                                </div>
                                <div className="flex  justify-between mb-2">
                                    <span>Costo de envío estimado</span>
                                    <span>$5.90</span>
                                </div>
                                <div className="flex  justify-between mb-2">
                                    <span>Descuento de envío</span>
                                    <span>-$5.90</span>
                                </div>
                                <hr />
                                <div className="flex  justify-between mt-4 mb-6">
                                    <span>Total</span>
                                    <span>${cart.total}</span>
                                </div>
                                <StripeCheckout
                                    name='Olympus Store'
                                    image='https://avatars.githubusercontent.com/u/49852681?s=400&u=990567cf7effed2395dc1f01ff6ac7f657b2da8f&v=4'
                                    billingAddress
                                    shippingAddress
                                    description={`El total es: $${cart.total}`}
                                    amount={cart.total * 100}
                                    token={onToken}
                                    stripeKey={stripeKey}
                                >
                                    <button className='w-full px-3 py-2 font-semibold bg-green-300 rounded-md'>Comprar</button>
                                </StripeCheckout>
                                {/* <CheckoutButton items={products}/> */}
                            </div>
                        </div>
                    </>
                    :
                    (
                        <EmptyCart />
                    )
            }
        </motion.main>
    )
}
export default Cart;