import { FaPlus, FaMinus } from 'react-icons/fa';
// import {  FaHeart } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Shared/Footer';
import { useEffect } from 'react';
import { useState } from 'react';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';
// import { addProductFavorite } from '../redux/favoriteRedux';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { removeLoading, setLoading } from '../redux/uiRedux';
import { BallTriangle } from  'react-loader-spinner'

const SingleProduct = () => {

    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const [product, setProduct] = useState<any>({})
    const { loading } = useSelector((state: RootStateOrAny) => state.ui);
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try {
                dispatch(setLoading());
                const product = await publicRequest.get(`products/find/${productId}`)
                setProduct(product.data);
            } catch (error) {
                dispatch(removeLoading());
                console.log(error);
            }
            dispatch(removeLoading());
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
    // console.log(color);

    // const [favorite, setFavorite] = useState(false);

    const handleClick = () => {
        dispatch(
            addProduct(
                {
                    // product: product,
                    // quantity,
                    // price: product.price * quantity
                    ...product,
                    quantity,
                    size
                }
            )
        )
    }

    // const handleFavorite = () => {
    //     !favorite ? setFavorite(true) : setFavorite(false);
    //     dispatch(
    //         addProductFavorite(
    //             {
    //                 ...product,
    //                 favorite: true
    //             }
    //         )
    //     )
    // }

    return (
        <>
            <div className="singleProductContainer">
                <Navbar />
                {
                    !loading ? (
                        <div className="wrapperSingleProduct">
                            <div className="imgProductContainer">
                                <img className='imgSingleProduct' src={product.img} alt="" />
                            </div>
                            <div className="infoSingleProduct">
                                <h4 className='titleSingleProduct'>{product.title}</h4>
                                <p className='descriptionSingleProduct'>{product.desc}</p>
                                <div className="priceContainer">
                                    {/* <FaHeart className={favorite ? 'favoriteIcon' : 'notFavoriteIcon'} onClick={(handleFavorite)} /> */}
                                    <p className='priceSingleProduct'>${product.price}</p>
                                </div>
                                <div className="optionsSingleProduct">
                                    <p className='optionText'>Número:</p>
                                    <select className='options' name="" onChange={(e) => setSize(e.target.value)}>
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
                                    <button className='checkoutButton'>Comprar</button>
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
        </>
    )
}

export default SingleProduct

