import { Link } from 'react-router-dom';

export const Product = ({ item }: any) => {

    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    }

    return (
        <Link className='w-72 rounded-md drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-2 transition ease-in-out duration-300' to={`/product/${item._id}`}>
            <div className="p-2 grid grid-cols-1 gap-2 text-gray-800 font-semibold">
                <div className="product">
                    <img className='rounded-md w-60 h-60' src={item.img} alt="" />
                </div>
                <span className='text-lg'>{truncate(item.title, 35)}</span>
                <span className=''>${item.price}</span>
                {/* <p className={item.inStock ? 'inStock' : 'notAvailable'}>{item.inStock ? 'Disponible' : 'Agotado'}</p> */}
            </div>
        </Link>
    )
}


