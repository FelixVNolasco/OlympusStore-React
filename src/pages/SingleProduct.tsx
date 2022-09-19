import { NavbarComponent } from '../components/Shared/Navbar/NavbarComponent';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Footer } from '../components/Shared/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import { addProduct } from '../redux/cartRedux';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import { getSingleProduct } from '../redux/apiCall';

const SingleProduct = () => {

    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const dispatch = useDispatch()
    const { loading } = useSelector((state: RootStateOrAny) => state.ui);
    const { isAuthenticated } = useSelector((state: RootStateOrAny) => state.user);
    const [product, setProduct] = useState<any>({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const product = await getSingleProduct(dispatch,productId);
                setProduct(product);
            } catch (error) {                
                console.log(error);
            }            
        }
        getProduct();
    }, [productId, dispatch])

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type: string) => {
        if (type === "inc") {
            setQuantity(quantity + 1)
        } else {
            quantity > 1 &&
                setQuantity(quantity - 1)
        }
    }

    const [size, setSize] = useState("");

    const handleClick = () => {
        dispatch(
            addProduct(
                {
                    ...product,
                    quantity,
                    size
                }
            )
        )
    }

    return (
        <div className="singleProductContainer">
            <NavbarComponent />
            {
                !loading ? (
                    <div className="wrapperSingleProduct full-height">
                        <div className="imgProductContainer">
                            {/* <Gallery /> */}
                            <img className='imgSingleProduct' src={product.img} alt="" />
                        </div>
                        <div className="infoSingleProduct">
                            <h4 className='titleSingleProduct'>{product.title}</h4>
                            <p className='descriptionSingleProduct'>{product.desc}</p>
                            <div className='categoriesSection'>
                                {(product.categories)?.map((category: string) => {
                                    return <span key={category} style={{ color: 'white', backgroundColor: 'gray' }} className="categoryLabel">{category}</span>
                                })}
                            </div>
                            <div className="priceContainer">
                                {/* <FaHeart className={favorite ? 'favoriteIcon' : 'notFavoriteIcon'} onClick={(handleFavorite)} /> */}
                                <p className='priceSingleProduct'>${product.price}</p>
                            </div>
                            <div className="optionsSingleProduct">
                                <p className='optionText'>Número:</p>
                                <select className='options' name="" onChange={(e) => setSize(e.target.value)}>
                                    <option value="Numero" disabled>Numero</option>
                                    {
                                        product.size?.map((size) => {
                                            return <option value={size} key={size}>{size}</option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className="productAmountContainer">
                                <FaMinus className='icons' onClick={() => handleQuantity("dec")} />
                                <span className='productAmount'>{quantity}</span>
                                <FaPlus className='icons' onClick={() => handleQuantity("inc")} />
                            </div>
                            <div className="checkoutContainer" onClick={handleClick}>
                                <button disabled={isAuthenticated ? false : true} className='checkoutButton'>Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                )
                    :
                    (
                        <div className='loadingProduct'>
                            <BallTriangle
                                height="162"
                                width="162"
                                color='#406882'
                                ariaLabel='loading' />
                        </div>
                    )
            }
            <Footer />
        </div>
    )
}

export default SingleProduct

