import { useLocation } from 'react-router-dom';
import { Products } from '../components/Products';
import { useState, useEffect } from 'react';

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
        <div className="w-full">
            <div className='titleContainer'>
                <img className='image' src={backgroundImage} alt="" />
                <h4 className='title'>{category}</h4>
            </div>
            <div className="filterContainer">
                <div className="filter">
                    <p className="filterText">Buscar por número: </p>
                    <select className='filterSelect' name="size" onChange={handleFilters}>
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
                    <p className="filterText">Ordenar por: </p>
                    <select className='filterSelect' onChange={handleSort} >
                        <option value="asc">Más Barato</option>
                        <option value="desc">Más Caro</option>
                    </select>
                </div>
            </div>

            <div className="productListContainer animate__animated animate__backInDown">
                <Products category={category} filters={filters} sort={sort} />
            </div>
        </div>
    )
}


export default ProductList;