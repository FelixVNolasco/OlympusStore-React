import { NavbarComponent } from '../components/Shared/Navbar/NavbarComponent';
import { Footer } from '../components/Shared/Footer';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { userRequest } from '../requestMethods';
import { cleanCart } from '../redux/cartRedux';
import { EmptyCart } from '../components/Shared/EmptyCart';

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state: RootStateOrAny) => state.cart)
    const { products } = useSelector((state: RootStateOrAny) => state.cart);
    const stripeKey = process.env.REACT_APP_STRIPE_KEY;
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const { data } = await (userRequest.post("/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: cart.total * 100
                    }
                ) as any)
                navigate("/success", {
                    state: {
                        stripeData: data,
                        cart: cart
                    },
                })
            } catch (error) {
                console.log(error);
            }
        }

        stripeToken && makeRequest();
    }, [stripeToken, cart.total, navigate, cart])

    const handleCleanCart = () => {
        dispatch(cleanCart({
            products: [],
            quantity: 0,
            total: 0
        }))
    }

    return (
        <>
            <NavbarComponent />
            <div>
                <div className="cart-container">
                    <div className="wrapperCart">
                        {
                            products.length !== 0 &&
                            <>
                                <h1 className='titleCart'>TUS ARTICULOS</h1>
                                <div className="top">
                                    <Link to={"/"}>
                                        <div className="topButton">Continuar Comprando</div>
                                    </Link>

                                    <div className="topTexts">
                                        <span className="topText">Bolsa de compras ({products.length})</span>
                                        {/* <span className="topText">Lista de deseados ({favorites.quantity})</span> */}
                                    </div>
                                    <button className="topButton" onClick={handleCleanCart}>Limpiar Carrito</button>
                                </div>
                            </>

                        }
                        <div className="bottom">
                            {
                                products.length !== 0 ?
                                    (

                                        <>
                                            <div className="info animate__animated animate__fadeIn animate__faster">
                                                {
                                                    products.map((product) => (
                                                        <div className="product" key={product._id.$oid}>
                                                            <div className="productDetail">
                                                                <img className='imageProduct' src={product?.img} alt="" />
                                                                <div className="details">
                                                                    <span className='productName'><b>Articulo:</b> {`${product.title.substring(0, 28)}...`}</span>
                                                                    <span className='productId'><b>Código:</b> {product._id}</span>
                                                                    <span className='productSize'><b>Tamaño:</b> {product.size}</span>
                                                                </div>
                                                            </div>
                                                            <div className="priceDetail">
                                                                <div className="productAmountContainer">
                                                                    {/* <FaMinus className='icons' onClick={handleRemoveProduct} /> */}
                                                                    <span className='productAmount'>{`Catidad: ${product.quantity}`}</span>
                                                                    {/* <FaPlus className='icons' onClick={handleAddProduct} /> */}
                                                                </div>
                                                                <div className="productAmountContainer">
                                                                    <div className="productPrice">${product.price * product.quantity}</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="summary animate__animated animate__fadeIn animate__faster">
                                                <h1 className='summaryTitle'>RESUMEN DE ORDEN</h1>
                                                <div className="summaryItem">
                                                    <span className='summaryItemText'>Subtotal</span>
                                                    <span className='summaryItemPrice'>${cart.total}</span>
                                                </div>
                                                <div className="summaryItem">
                                                    <span className='summaryItemText'>Costo de envío estimado</span>
                                                    <span className='summaryItemPrice'>$5.90</span>
                                                </div>
                                                <div className="summaryItem">
                                                    <span className='summaryItemText'>Descuento de envío</span>
                                                    <span className='summaryItemPrice'>-$5.90</span>
                                                </div>
                                                <div className="summaryItem">
                                                    <span className='summaryItemText'>Total</span>
                                                    <span className='summaryItemPrice'>${cart.total}</span>
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
                                                    <button className='checkoutButton'>Comprar</button>
                                                </StripeCheckout>

                                            </div>
                                        </>

                                    )
                                    :
                                    (
                                        <EmptyCart />
                                    )
                            }
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
export default Cart;