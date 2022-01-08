
import { FaHeart, FaSearch, FaCartPlus } from 'react-icons/fa';
import { simpleProduct } from '../data';

export const Product = ({item}: {item:simpleProduct}) => {
    return (
        <>
            <div className="product">
                <div className='circle'>
                    <img className='image' src={item.img} alt="" />
                    <div className="info">
                        <div className="icon">
                            <FaHeart />                            
                        </div>
                        <div className="icon">
                            <FaSearch />
                        </div>
                        <div className="icon">
                            <FaCartPlus />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


