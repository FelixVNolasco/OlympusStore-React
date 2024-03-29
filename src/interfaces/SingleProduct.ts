

export type Product = {
    _id: string,
    __v: number,
    categories: string[],
    color: string[],
    createdAt: Date,
    desc: string,
    img: string,
    inStock: boolean,
    price: number,
    size: string[],
    title: string,
    updatedAt: Date
}

export type SingleProductResponse = {
    data: Product
}
