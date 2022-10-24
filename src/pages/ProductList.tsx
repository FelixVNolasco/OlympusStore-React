import { useLocation } from 'react-router-dom';
import { Products } from '../components/Products';
import { useState, useEffect } from 'react';
import { Search } from '../components/Shared/Search';

const ProductList = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
    const [backgroundImage, setbackgroundImage] = useState("");

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

    useEffect(() => {
        const handleBackgroundCategory = (category: string) => {
            switch (category) {
                case "basketball":
                    setbackgroundImage("https://www.wallpaperuse.com/wallp/11-110016_m.jpg")
                    return
                case "soccer":
                    setbackgroundImage("https://res.cloudinary.com/dhyxqmnua/image/upload/v1642826493/Olympus/Soccer/pexels-alexander-nadrilyanski-3684122_tgskfl.jpg")
                    return
                case "running":
                    setbackgroundImage("https://res.cloudinary.com/dhyxqmnua/image/upload/v1642826534/Olympus/running/pexels-pixabay-34514_1_lcsoo7.jpg")
                    return
                default:
                    setbackgroundImage("https://res.cloudinary.com/dhyxqmnua/image/upload/v1642826600/Olympus/running/pexels-krivec-ales-551852_tnmx4d.jpg")
                    return
            }
        }
        handleBackgroundCategory(category);
    }, [category]);


    return (
        <section className="grid justify-items-center mt-4 mb-4">
            <div className='grid grid-cols-1 gap-2 lg:gap-12 w-10/12 items-center justify-items-center'>
                <div className='flex justify-center items-center bg-gray-800 w-full h-16 rounded-md'>
                    <h4 className='text-xl text-slate-50 uppercase'>{category}</h4>
                </div>
                <div className="flex justify-between w-full">
                    <div className="filter">
                        <p className="filterText">Buscar por número: </p>
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
                    <div className="filter">
                        <div className="flex">
                            <div>
                                <p className="filterText">Ordenar por: </p>
                                <select className='border-2 border-gray-500 p-1 rounded-md' onChange={handleSort} >
                                    <option value="asc">Más Barato</option>
                                    <option value="desc">Más Caro</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-5/6 md:1/2 lg:w-2/3 xl:w-1/3 mx-auto'>
                    <h4 className="text-lg text-center font-semibold">Buscar Productos</h4>
                    <Search category={category} />
                </div>                
                
                <Products category={category} filters={filters} sort={sort} />                
            </div>
        </section>
    )
}


export default ProductList;