import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Newsletter } from '../components/Newsletter';
import { Products } from '../components/Products';
import { Footer } from '../components/Shared/Footer';
import { useState } from 'react';

export const ProductList = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2];

    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e: any) => {
        const value = e.target.value;
        setFilters(
            {
                ...filters,
                [e.target.name] : value
            }
        );
    }

    const handleSort = (e: any) => {    
        setSort(e.target.value)
    }

    return (
        <>
            <div className="container">
                <Navbar />
                <div className='titleContainer'>
                    <h4 className='title'>{category}</h4>
                </div>
                
                <div className="filterContainer">
                    <div className="filter">
                        <p className="filterText">Buscar por: </p>
                        <select className='filterSelect' name="color" onChange={handleFilters}>
                            <option value="">Color</option>
                            <option value="white">white</option>
                            <option value="black">black</option>
                            <option value="red">red</option>
                            <option value="blue">Azul</option>
                            <option value="green">green</option>
                        </select>
                        <select className='filterSelect' name="size" onChange={handleFilters}>
                            <option value="">Tamaño</option>
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
                <Products category={category} filters={filters} sort={sort} />
                <Newsletter />
                <Footer />
            </div>
        </>
    )
}

