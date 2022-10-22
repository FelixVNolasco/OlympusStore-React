import { Link } from 'react-router-dom';

const Category = ({ item }: any) => {
    return (
        <Link className='drop-shadow-lg hover:drop-shadow-2xl hover:-translate-y-2 transition ease-in-out duration-300' to={`/products/${item.category}`}>
            <div className=''>
                <img className='w-80 h-90 rounded-lg' src={item.img} alt="" />
                {/* <p className=''>{item.title}</p> */}
            </div>
        </Link>
    )
}

export default Category
