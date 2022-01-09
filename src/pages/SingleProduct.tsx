import { FaPlus, FaMinus } from 'react-icons/fa';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Shared/Footer';

const SingleProduct = () => {
    return (
        <>
            <div className="singleProductContainer">
                <Navbar />
                <div className="wrapperSingleProduct">
                    <div className="imgProductContainer">
                        <img className='imgSingleProduct' src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1641703125/Olympus/calzado-blazer-low-77-jumbo-gRBtmC_od0tbj.jpg" alt="" />
                    </div>
                    <div className="infoSingleProduct">
                        <h4 className='titleSingleProduct'>EXAMPLE PRODUCT</h4>
                        <p className='descriptionSingleProduct'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem suscipit iure quae maiores magnam necessitatibus ea porro, est assumenda sit at error deserunt modi?</p>
                        <p className='priceSingleProduct'>$30</p>
                        <div className="optionsSingleProduct">
                            <p className='optionText'>Número:</p>
                            <select className='options' name="" id="">
                                <option value="24.5">24.5</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27.5">27.5</option>
                                <option value="28">28</option>
                            </select>
                        </div>
                        <div className="productAmountContainer">
                            <FaPlus className='icons' />
                            <span className='productAmount'>2</span>
                            <FaMinus className='icons' />
                        </div>
                        <div className="checkoutContainer">
                            <button className='checkoutButton'>Comprar</button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default SingleProduct
