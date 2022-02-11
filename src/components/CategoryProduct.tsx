import { Link } from 'react-router-dom';

export const CategoryProduct = ({ item }: any) => {
    
    return (
        <>
            <div className='productContainer'>
                <Link to={`/product/${item._id.$oid}`}>
                    <div className="product">
                        <div className='imageContainer'>
                            <img className='image' src={item.img} alt="" />
                        </div>
                    </div>
                </Link>
                <div className="productInfo">
                    <p className='title'>{item.title}</p>
                    <div className='priceStock'>
                        <p className='price'>${item.price?.$numberInt}</p>
                        <p className={item.inStock ? 'inStock' : 'notAvailable'}>{item.inStock ? 'Disponible' : 'Agotado'}</p>
                    </div>
                </div>
            </div>
        </>
    )
}


