import { Navbar } from '../components/Navbar';
import { Newsletter } from '../components/Newsletter';
import { Products } from '../components/Products';
import { Footer } from '../components/Shared/Footer';


export const ProductList = () => {
    return (
        <>
            <div className="categoryContainer">
                <Navbar />
                <h4 className='title'>Football</h4>
                <div className="filterContainer">
                    <div className="filter">
                        <p className="filterText">Buscar por: </p>
                        <select className='filterSelect' name="" id="">
                            <option value="" disabled selected>Color</option>
                            <option value="Blanco">Blanco</option>
                            <option value="Negro">Negro</option>
                            <option value="Rojo">Rojo</option>
                            <option value="Azul">Azul</option>
                            <option value="Verde">Verde</option>
                        </select>
                        <select className='filterSelect' name="" id="">
                            <option value="" disabled selected>Tamaño</option>
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                        </select>
                    </div>
                    <div className="filter">
                        <p className="filterText">Ordenar por: </p>
                        <select className='filterSelect' name="" id="">
                            <option value="" disabled selected>Más nuevo</option>
                            <option value="Blanco">Precio (ASC)</option>
                            <option value="Negro">Precio (DSC)</option>
                        </select>
                    </div>
                </div>
                <Products />
                <Newsletter />
                <Footer />
            </div>
        </>
    )
}

