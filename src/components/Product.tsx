import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Product as ProductType } from '../interfaces/SingleProduct';

export const Product = ({ product }: { product: ProductType }) => {

    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    }

    return (
        <Link className='w-72 drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-2 transition ease-in-out duration-300' to={`/product/${product._id}`}>
            <div className="p-2 grid grid-cols-1 gap-2 justify-items-center text-gray-800 font-semibold">
                <LazyLoadImage width={256} height={256} src={product.img} />
                <div className="w-64 flex flex-col justify-start">
                    <span className='text-lg'>{truncate(product.title, 35)}</span>
                    <span className=''>${product.price}</span>
                </div>
                {/* <p className={product.inStock ? 'inStock' : 'notAvailable'}>{product.inStock ? 'Disponible' : 'Agotado'}</p> */}
            </div>
        </Link>
    )
}


