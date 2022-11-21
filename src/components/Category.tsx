import { Link } from 'react-router-dom';

const Category = ({ item }: any) => {
    return (
        <Link to={`/products/${item.category}`}>
            <div className='category'>
                <img className='categoryBackground' src={item.img} alt="" />
                <p className='title'>{item.title}</p>
            </div>
        </Link> 
    )
}

export default Category
 