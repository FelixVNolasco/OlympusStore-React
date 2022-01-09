
import { FaPlus, FaMinus } from 'react-icons/fa';

import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Shared/Footer';

export const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="wrapperCart">
                <h1 className='titleCart'>TUS ARTICULOS</h1>
                <div className="top">
                    <div className="topButton">CONTINUAR COMPRANDO</div>
                    <div className="topTexts">
                        <span className="topText">Bolsa de compras (2)</span>
                        <span className="topText">Lista de deseados (0)</span>
                    </div>
                    <button className="topButton">Realizar Checkout</button>
                </div>

                <div className="bottom">
                    <div className="info">
                        <div className="product">
                            <div className="productDetail">
                                <img className='imageProduct' src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1641618679/Olympus/510lT8MU9kL._AC_SL1000__tkqgss.jpg" alt="" />
                                <div className="details">
                                    <span className='productName'><b>Articulo:</b> Balon Nike Entrenamiento</span>
                                    <span className='productId'><b>Código:</b> NKD2312</span>
                                    <span className='productColor'></span>
                                    <span className='productSize'><b>Tamaño:</b> Balon de 4</span>
                                </div>
                            </div>
                            <div className="priceDetail">
                                <div className="productAmountContainer">
                                    <FaPlus className='icons' />
                                    <span className='productAmount'>2</span>
                                    <FaMinus className='icons' />
                                </div>
                                <div className="productAmountContainer">
                                    <div className="productPrice">$34</div>
                                </div>
                            </div>
                        </div>

                        <div className='separator'></div>

                        <div className="product">
                            <div className="productDetail">
                                <img className='imageProduct' src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1641618679/Olympus/510lT8MU9kL._AC_SL1000__tkqgss.jpg" alt="" />
                                <div className="details">
                                    <span className='productName'><b>Articulo:</b> Balon Nike Entrenamiento</span>
                                    <span className='productId'><b>Código:</b> NKD2312</span>
                                    <span className='productColor'></span>
                                    <span className='productSize'><b>Tamaño:</b> Balon de 4</span>
                                </div>
                            </div>
                            <div className="priceDetail">
                                <div className="productAmountContainer">
                                    <FaPlus className='icons' />
                                    <span className='productAmount'>2</span>
                                    <FaMinus className='icons' />
                                </div>
                                <div className="productAmountContainer">
                                    <div className="productPrice">$34</div>
                                </div>
                            </div>
                        </div>

                        <div className='separator'></div>

                        <div className="product">
                            <div className="productDetail">
                                <img className='imageProduct' src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1641618679/Olympus/510lT8MU9kL._AC_SL1000__tkqgss.jpg" alt="" />
                                <div className="details">
                                    <span className='productName'><b>Articulo:</b> Balon Nike Entrenamiento</span>
                                    <span className='productId'><b>Código:</b> NKD2312</span>
                                    <span className='productColor'></span>
                                    <span className='productSize'><b>Tamaño:</b> Balon de 4</span>
                                </div>
                            </div>
                            <div className="priceDetail">
                                <div className="productAmountContainer">
                                    <FaPlus className='icons' />
                                    <span className='productAmount'>2</span>
                                    <FaMinus className='icons' />
                                </div>
                                <div className="productAmountContainer">
                                    <div className="productPrice">$34</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="summary">
                        <h1 className='summaryTitle'>RESUMEN DE ORDEN</h1>
                        <div className="summaryItem">
                            <span className='summaryItemText'>Subtotal</span>
                            <span className='summaryItemPrice'>$80</span>
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
                            <span className='summaryItemPrice'>$80</span>
                        </div>
                        <button className='checkoutButton'>Comprar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
