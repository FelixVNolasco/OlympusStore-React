import React from 'react'
import Categories from '../components/Categories'
import { Slider } from '../components/Shared/Slider'
import { Products } from '../components/Products';
import { Footer } from '../components/Shared/Footer';
import { NavbarComponent } from '../components/Shared/Navbar/NavbarComponent';

export const Home = () => {
    return (
        <div className="home">
            <NavbarComponent />
            <Slider />
            <Categories />
            <Products />
            <Footer />
        </div>
    )
}

