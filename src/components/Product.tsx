
import { FaHeart, FaSearch, FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Product = ({ item }: any) => {
    return (
        <>
            <div className="product">
                <div className='circle'>
                    <img className='image' src={item.img} alt="" />
                    <div className="info">
                        <div className="icon">
                            <FaHeart />
                        </div>
                        <Link className='icon' to={`/product/${item._id}`}>
                            <FaSearch />
                        </Link>

                        {/* <div className="icon">
                            <FaCartPlus />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}


