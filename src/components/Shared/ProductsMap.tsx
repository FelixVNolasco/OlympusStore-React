import { Product } from "../Product"

export const ProductsMap = ({ currentProducts }) => {
    return (
        <div className="w-10/12 lg:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center">
            {currentProducts &&
                currentProducts.map((product) => (
                    <Product key={product._id} item={product} />
                ))}
        </div>
    )
}
