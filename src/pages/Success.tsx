import { Link, useLocation } from 'react-router-dom';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { SuccessOrderCard } from '../components/Shared/SuccessOrderCard';
import { BallTriangle } from 'react-loader-spinner';
import { cleanCart } from '../redux/cartRedux';
import { successPurchaseRequest } from '../redux/apiCall';
import { motion } from 'framer-motion';

const Success = () => {

    const location: any = useLocation();
    const data = location.state.stripeData;
    const cart = location.state.cart;
    const { uid, accessToken } = useSelector((state: RootStateOrAny) => state.user.currentUser);
    const [order, setOrder] = useState(undefined);
    const [orderId, setOrderId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const createOrder = async () => {
            try {
                const stripeData = {
                    userId: uid,
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
                const purchaseData = await successPurchaseRequest(dispatch, stripeData, uid, accessToken);
                setOrder(purchaseData);
                setOrderId(purchaseData._id);
            } catch (error) {
                console.log(error);
            }
        };
        data && createOrder();
    }, [cart, data, uid, accessToken, dispatch]);

    return (
        <motion.div
            style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
            className="mb-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
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
            <Link to={"/purchases"}>
                <button className='inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ripple-surface-light400' style={{ padding: 10, marginTop: 20 }} onClick={() => dispatch(cleanCart({
                    products: [],
                    quantity: 0,
                    total: 0
                }))}>Ir al mis compras</button>
            </Link>
        </motion.div>
    )
}

export default Success;