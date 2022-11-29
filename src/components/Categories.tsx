
import { Category as CategoryType } from '../interfaces/Category';
import Category from './Category';
import { useEffect, useState } from 'react';
import { getCategories as categoriesCall } from '../redux/apiCall';
import { useDispatch } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';


const Categories = () => {

    const [categories, setCategories] = useState<CategoryType[] | null>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategories = async () => {
            const categories = await categoriesCall(dispatch);
            setCategories(categories)
        }
        getCategories();
    }, [dispatch]);

    return (
        <section className="grid justify-items-center mb-64">
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-12 w-10/12 items-center justify-items-center'>
                {
                    categories ? (
                        categories.map((category: CategoryType) => {
                            return <Category key={category._id} item={category} />;
                        })
                    )
                        :
                        (
                            <div className='grid lg:col-span-2 xl:col-span-3 justify-items-center'>
                                <BallTriangle
                                    height="162"
                                    width="162"
                                    color='#406882'
                                    ariaLabel='loading'
                                />
                            </div>
                        )
                }
            </div>
        </section>
    )
}

export default Categories
