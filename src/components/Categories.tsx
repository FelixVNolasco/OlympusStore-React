
import { categories, category } from '../data';
import Category from './Category';

const Categories = () => {
    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className='categories'>
                        {
                            categories.map((category: category) => {
                                return <Category key={category.id} item={category} />;
                            })
                        }
                    </div>
                </div>

            </div>


        </>
    )
}

export default Categories
