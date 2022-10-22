import { Product } from "../Product"

export const ProductsMap = ({ currentProducts }) => {
    return (
        <div className="mt-12 w-10/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 jusify-center justify-items-center">
            {currentProducts &&
                currentProducts.map((product) => (
                    <Product key={product._id} item={product} />
                ))}
        </div>
    )
}
