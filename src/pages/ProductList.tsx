import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Products } from '../components/Products';

import { useState, useEffect } from 'react';

const ProductList = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    console.log(filters);

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


    const [backgroundImage, setbackgroundImage] = useState("");

    useEffect(() => {
        const handleBackgroundCategory = (category: string) => {
            switch (category) {
                case "basketball":
                    setbackgroundImage("https://res.cloudinary.com/dhyxqmnua/image/upload/v1642826422/Olympus/basketball/pexels-maik-kleinert-3534924_pwnbe9.jpg")
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
        <>
            <div className="container">
                <Navbar />
                <div className='titleContainer'>
                    <img className='image' src={backgroundImage} alt="" />
                    <h4 className='title'>{category}</h4>
                </div>
                <div className="filterContainer">
                    <div className="filter">
                        <p className="filterText">Buscar por: </p>
                        <select className='filterSelect' name="color" onChange={handleFilters}>
                            <option value={null}>Color</option>
                            <option value="white">white</option>
                            <option value="black">black</option>
                            <option value="red">red</option>
                            <option value="blue">blue</option>
                            <option value="green">green</option>
                        </select>
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
                            <option value="newest">Más nuevo</option>
                            <option value="asc">Precio (ASC)</option>
                            <option value="desc">Precio (DSC)</option>
                        </select>
                    </div>
                </div>

                <div className="productListContainer animate__animated animate__backInDown">
                    <Products category={category} filters={filters} sort={sort} />
                </div>
            </div>
        </>
    )
}


export default ProductList;