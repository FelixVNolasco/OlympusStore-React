import Categories from '../components/Categories'
import { Slider } from '../components/Shared/Slider'
import { Products } from '../components/Products';
import { Footer } from '../components/Shared/Footer';

export const Home = () => {
    return (
        <div className="home">    
            <Slider />
            <Categories />
            <Products />
            <Footer />
        </div>
    ) 
}

