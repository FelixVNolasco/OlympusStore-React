import Categories from '../components/Categories'
import { Hero } from '../components/Shared/Hero'
import { Products } from '../components/Products';
import { Footer } from '../components/Shared/Footer';

export const Home = () => {
    return (
        <div className="home">    
            <Hero />
            <Categories />
            <Products />
            <Footer />
        </div>
    )
}

