import React from 'react'
import Categories from '../components/Categories'
import { Navbar } from '../components/Navbar'
import { Slider } from '../components/Shared/Slider'
import { Products } from '../components/Products';
import { Newsletter } from '../components/Newsletter';
import { Footer } from '../components/Shared/Footer';

export const Home = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </>
    )
}

