import { Product } from "../interfaces/SingleProduct";
import { addProduct } from "../redux/cartRedux";

export function isSingleProduct(singleProduct): singleProduct is Product {
    return singleProduct;
}


export function addCartProduct(dispatch, product, quantity, size) {
    dispatch(
        addProduct(
            {
                ...product,
                quantity,
                size
            }
        )
    )
} 