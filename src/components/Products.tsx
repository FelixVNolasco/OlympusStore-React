
import { popularProducts, simpleProduct } from '../data';
import { Product } from './Product';

export const Products = () => {
    return (
        <>
            <div className="container">
                <h1 className='productsTitle'>Productos más populares</h1>
                <div className="productsSection">
                    <div className='products'>
                        {
                            popularProducts.map((product: simpleProduct) => {
                                return <Product key={product.id} item={product} />
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
