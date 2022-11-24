import { useLocation } from 'react-router-dom';
import { Products } from '../components/Products';
import { useState } from 'react';
import { Search } from '../components/Shared/Search';
import { CategoryProducts } from '../components/CategoryProducts';

const ProductList = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState<string>("newest");
    const handleFilters = (e: any) => {
        const value = e.target.value;
        setFilters(
            {
                ...filters,
                [e.target.name]: value
            }
        );
    }

    const handleSort = (e: any) => {
        setSort(e.target.value)
    }

    return (
        <main className="grid justify-items-center mt-4 mb-auto">
            <div className='grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-2 w-11/12 justify-items-start'>
                <div className='col-span-1 w-full xl:col-span-2 xl:w-5/6'>
                    <div className='flex justify-center items-center bg-gray-800 h-16 rounded-md'>
                        <h4 className='text-xl text-slate-50 uppercase'>{category}</h4>
                    </div>
                    <div className="mt-4 flex flex-col">
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold">Buscar por número: </p>
                            <select className='border-2 border-gray-500 p-1 rounded-md' name="size" onChange={handleFilters}>
                                <option value="" disabled>Tamaño</option>
                                <option value="24">24</option>
                                <option value="24.5">24.5</option>
                                <option value="25">25</option>
                                <option value="25.5">25.5</option>
                                <option value="26">26</option>
                                <option value="26.5">26.5</option>
                                <option value="27">27</option>
                                <option value="27.5">27.5</option>
                                <option value="28">28</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold">Ordenar por: </p>
                            <select className='border-2 border-gray-500 p-1 rounded-md' onChange={handleSort} >
                                <option value="asc">Más Barato</option>
                                <option value="desc">Más Caro</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 w-full xl:col-span-10 '>
                    <div className='flex justify-center'>
                        <div className='w-full lg:w-3/4 2xl:w-1/2'>
                            <h4 className="text-lg text-center font-semibold">Buscar Productos</h4>
                            <Search category={category} />
                        </div>
                    </div>
                    <CategoryProducts category={category} filters={filters} sort={sort} />
                </div>
            </div>
        </main>
    )
}


export default ProductList;