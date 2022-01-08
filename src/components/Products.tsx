
import { popularProducts, simpleProduct } from '../data';
import { Product } from './Product';

export const Products = () => {
    return (
        <>
            <div className="container">
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
