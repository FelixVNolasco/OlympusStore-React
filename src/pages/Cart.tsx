
import { FaPlus, FaMinus } from 'react-icons/fa';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Shared/Footer';
import { useSelector, RootStateOrAny } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';
import { userRequest } from '../requestMethods';

export const Cart = () => {



    const cart = useSelector((state: RootStateOrAny) => state.cart)
    const { products } = useSelector((state: RootStateOrAny) => state.cart);
    // console.log(products);

    const stripeKey = process.env.REACT_APP_STRIPE_KEY;
    // console.log(stripeKey);

    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token)
    }
    // console.log(stripeToken);

    const navigate = useNavigate();

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

    console.log(stripeToken);
    return (
        <>
            <Navbar />
            <div className="wrapperCart">
                <h1 className='titleCart'>TUS ARTICULOS</h1>
                <div className="top">
                    <Link to={"/"}>
                        <div className="topButton">CONTINUAR COMPRANDO</div>
                    </Link>

                    <div className="topTexts">
                        <span className="topText">Bolsa de compras ({products.length})</span>
                        <span className="topText">Lista de deseados (0)</span>
                    </div>
                    <button className="topButton">Realizar Checkout</button>
                </div>

                <div className="bottom">
                    <div className="info">
                        {
                            products.map((product) => (
                                <div className="product" key={product._id}>
                                    <div className="productDetail">
                                        <img className='imageProduct' src={product?.img} alt="" />
                                        <div className="details">
                                            <span className='productName'><b>Articulo:</b> {product.title}</span>
                                            <span className='productId'><b>Código:</b> {product._id}</span>
                                            <span className='productColor'>{product.color}</span>
                                            <span className='productSize'><b>Tamaño:</b> {product.size}</span>
                                        </div>
                                    </div>
                                    <div className="priceDetail">
                                        <div className="productAmountContainer">
                                            <FaPlus className='icons' />
                                            <span className='productAmount'>{product.quantity}</span>
                                            <FaMinus className='icons' />
                                        </div>
                                        <div className="productAmountContainer">
                                            <div className="productPrice">${product.price * product.quantity}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="summary">
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
                            name='olympus'
                            image='https://avatars.githubusercontent.com/u/49852681?s=400&u=990567cf7effed2395dc1f01ff6ac7f657b2da8f&v=4'
                            billingAddress
                            shippingAddress
                            description={`Your total is ${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={stripeKey}
                        >
                            <button className='checkoutButton'>Comprar</button>
                        </StripeCheckout>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
