import Categories from '../components/Categories'
import { Hero } from '../components/Shared/Hero'
import { Products } from '../components/Products';
import { motion } from 'framer-motion';

export const Home = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Hero />
            <Categories />
            <Products />
        </motion.div>
    )
}

