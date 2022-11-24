import { Link } from 'react-router-dom';
import { category } from '../interfaces/Category';

const Category = ({ item }: { item: category }) => {
    return (
        <Link className='drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-2 transition ease-in-out duration-300' to={`/products/${item.category}`}>
            <img className='w-full lg:w-11/12 lg:mx-auto rounded-lg' src={item.img} alt="" />
        </Link>
    )
}

export default Category
