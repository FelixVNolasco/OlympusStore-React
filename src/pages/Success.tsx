import { Link, useLocation } from 'react-router-dom';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { userRequest } from '../requestMethods';
import { SuccessOrderCard } from '../components/Shared/SuccessOrderCard';
import { BallTriangle } from 'react-loader-spinner';
import { cleanCart } from '../redux/cartRedux';

const Success = () => {

    const location: any = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.cart;
    const { uid } = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const [order, setOrder] = useState(undefined);
    const [orderId, setOrderId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post("/orders", {
                    userId: uid,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                });
                setOrder(res.data);
                setOrderId(res.data._id);
            } catch (error) {
                console.log(error);
            }
        };
        data && createOrder();
    }, [cart, data, uid]);

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
                {
                    orderId
                        ? <SuccessOrderCard order={order} />
                        : <BallTriangle
                            height="162"
                            width="162"
                            color='#406882'
                            ariaLabel='loading'
                        />}
                <Link to={"/"}>
                    <button className='btn btn-primary' style={{ padding: 10, marginTop: 20 }} onClick={() => dispatch(cleanCart({
                        products: [],
                        quantity: 0,
                        total: 0
                    }))}>Ir al Inicio</button>
                </Link>
            </div>
        </>
    )
}

export default Success;