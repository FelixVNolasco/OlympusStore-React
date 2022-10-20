import { Link, useLocation } from 'react-router-dom';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { SuccessOrderCard } from '../components/Shared/SuccessOrderCard';
import { BallTriangle } from 'react-loader-spinner';
import { cleanCart } from '../redux/cartRedux';
import { successPurchaseRequest } from '../redux/apiCall';

const Success = () => {

    const location: any = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.cart;
    const { _id, accessToken } = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const [order, setOrder] = useState(undefined);
    const [orderId, setOrderId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const createOrder = async () => {
            try {
                const stripeData = {
                    userId: _id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item.quantity,
                        title: item.title,
                        size: item.size,
                        img: item.img,
                        price: item.price
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                };
                const purchaseData = await successPurchaseRequest(dispatch, stripeData, _id, accessToken);
                setOrder(purchaseData);
                setOrderId(purchaseData._id);
            } catch (error) {
                console.log(error);
            }
        };
        data && createOrder();
    }, [cart, data, _id, accessToken, dispatch]);

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