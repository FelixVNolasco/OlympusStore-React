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
    const orderId = location.state.id;
    // const { uid, accessToken } = useSelector((state: RootStateOrAny) => state.user.currentUser);
    // const [order, setOrder] = useState(undefined);
    // const [orderId, setOrderId] = useState(null);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const createOrder = async () => {
    //         try {
    //             const stripeData = {
    //                 userId: uid,
    //                 products: cart.products.map((item) => ({
    //                     productId: item._id,
    //                     quantity: item.quantity,
    //                     title: item.title,
    //                     size: item.size,
    //                     img: item.img,
    //                     price: item.price
    //                 })),
    //                 amount: cart.total,
    //                 address: data.billing_details.address,
    //             };
    //             const purchaseData = await successPurchaseRequest(dispatch, stripeData, uid, accessToken);
    //             setOrder(purchaseData);
    //             setOrderId(purchaseData._id);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     data && createOrder();
    // }, [cart, data, uid, accessToken, dispatch]);

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
                    ? <SuccessOrderCard order={orderId} />
                    : <BallTriangle
                        height="162"
                        width="162"
                        color='#406882'
                        ariaLabel='loading'
                    />}
        </motion.div>
    )
}

export default Success;