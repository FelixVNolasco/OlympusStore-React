export interface Product {
    productId: string;
    quantity: number;
    title: string;
    size: string;
    img: string;
    price: string;
    _id: string;
}

export interface Address {
    city: string;
    country: string;
    line1: string;
    line2?: any;
    postal_code: string;
    state: string;
}

export interface Order {
    userId: string;
    products: Product[];
    amount: number;
    address: Address;
    status: string;
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface OrderResponse {
    data: Order
}