

export const EmptyCart = () => {
    return (
        <div className="container mx-auto emptyCartContainer animate__animated animate__fadeIn animate__faster">
            <img className="icon" src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1643407056/Olympus/cart/cart_k4mt7x.png" alt="" />
            <h2 className="text-xl font-semibold">Carrito de compras vacio</h2>
            <p className="text-center">Parece que aún no has agregado articulos a tu carrito de compra</p>
        </div>
    )
};


