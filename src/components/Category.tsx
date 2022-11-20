import { Link } from 'react-router-dom';

const Category = ({ item }: any) => {
    return (
        <Link className='drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-2 transition ease-in-out duration-300' to={`/products/${item.category}`}>
            <div className=''>
                <img className='w-full lg:w-11/12 rounded-lg' src={item.img} alt="" />
            </div>
        </Link>
    )
}

export default Category
