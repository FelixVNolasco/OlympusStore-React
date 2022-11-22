import { FaPlus, FaMinus, FaExclamationCircle } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Footer } from '../components/Shared/Footer';
import { useEffect, useState } from 'react';
import { addProduct } from '../redux/cartRedux';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import { getSingleProduct } from '../redux/apiCall';
import ReactTooltip from 'react-tooltip';
import { Product } from '../interfaces/SingleProduct';
import { doneFetching } from '../redux/userRedux';

const SingleProduct = () => {

    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const dispatch = useDispatch()
    const { isFetching } = useSelector((state: RootStateOrAny) => state.user);
    const { isAuthenticated } = useSelector((state: RootStateOrAny) => state.user);
    const [product, setProduct] = useState<Product>();
    const [categories, setCategories] = useState<string[]>([]);
    const [sizes, setSizes] = useState<string[]>([]);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const product = await getSingleProduct(dispatch, productId);
                setProduct(product);
                setCategories(product.categories);
                setSizes(product.size);
                dispatch(doneFetching());
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
            {
                !isFetching ? (
                    <div className="wrapperSingleProduct full-height">
                        <div className="imgProductContainer">
                            <img className='imgSingleProduct' src={product?.img} alt="" />
                        </div>
                        <div className="infoSingleProduct">
                            <h4 className='titleSingleProduct'>{product?.title}</h4>
                            <p className='descriptionSingleProduct'>{product?.desc}</p>
                            <div className='categoriesSection'>
                                {categories.map((category: string) => {
                                    return <span key={category} style={{ color: 'white', backgroundColor: 'gray' }} className="categoryLabel">{category}</span>
                                })}
                            </div>
                            <div className="priceContainer">
                                <p className='priceSingleProduct'>${product?.price}</p>
                            </div>
                            <div className="optionsSingleProduct">
                                <p className='optionText'>Número:</p>
                                <select className='options border-slate-400 border-2 rounded-md' name="" onChange={(e) => setSize(e.target.value)}>
                                    {
                                        sizes.map((size) => {
                                            return <option  value={size} key={size}>{size}</option>
                                        })
                                    }
                                </select> 
                            </div>
                            <div className="productAmountContainer">
                                <FaMinus className='icons' onClick={() => handleQuantity("dec")} />
                                <span className='productAmount'>{quantity}</span>
                                <FaPlus className='icons' onClick={() => handleQuantity("inc")} />
                            </div>
                            <div className="checkoutContainer">
                                <button onClick={handleClick} disabled={!isAuthenticated} className='checkoutButton'>Añadir al Carrito</button>
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
                            {/*<button onClick={() => dispatch(cleanCart({
                                products: [],
                                quantity: 0,
                                total: 0
                            }))}>deded</button>*/}
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

