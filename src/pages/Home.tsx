import React from 'react'
import Categories from '../components/Categories'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Shared/Slider'
import { Products } from '../components/Products';
import { Footer } from '../components/Shared/Footer';

export const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Footer />
        </div>
    )
}

