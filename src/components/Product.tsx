import { Link } from 'react-router-dom';

export const Product = ({ item }: any) => {

    function truncate(str, n){
        return (str.length > n) ? str.slice(0, n-1) + '...' : str;
    }

    return (
        <div className='productContainer'>
            <Link to={`/product/${item._id}`}>
                <div className="product">
                    <div className='imageContainer'>
                        <img className='image' src={item.img} alt="" />
                    </div>
                </div>
            </Link>
            <div className="productInfo">
                <p className='titleProduct'>{truncate(item.title, 35)}</p>
                <div className='priceStock'>
                    <p className='price'>${item.price}</p>
                    <p className={item.inStock ? 'inStock' : 'notAvailable'}>{item.inStock ? 'Disponible' : 'Agotado'}</p>
                </div>
            </div>
        </div>
    )
}


