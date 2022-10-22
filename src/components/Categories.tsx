
import { categories, category } from '../data';
import Category from './Category';

const Categories = () => {
    return ( 
        <section className="grid justify-items-center mb-64">
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12 w-10/12 items-center justify-items-center'>
                {
                    categories.map((category: category) => {
                        return <Category key={category.id} item={category} />;
                    })
                }
            </div>
        </section>
    )
}

export default Categories
