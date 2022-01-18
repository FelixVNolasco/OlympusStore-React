import { Link, useLocation } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useState, useEffect } from 'react';
import { userRequest } from '../requestMethods';

export const Success = () => {

    interface stateType {
        stripeData: any,
        cart: any
    }

    const location: any = useLocation();
    console.log(location);

    const data = location.state.stripeData;
    const cart = location.state.cart;
    // const currentUser = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const [orderId, setOrderId] = useState(null);


    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post("/orders", {
                    // userId: currentUser._id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                });
                setOrderId(res.data._id);
            } catch { }
        };
        data && createOrder();
    }, [cart, data]);

    return (
        <>
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {orderId
                    ? `Order has been created successfully. Your order number is ${orderId}`
                    : `Successfull. Your order is being prepared...`}
                <Link to={"/"}>
                    <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
                </Link>

            </div>
        </>
    )
}

