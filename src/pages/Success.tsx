import { useLocation } from 'react-router-dom';
import { SuccessOrderCard } from '../components/Shared/SuccessOrderCard';
import { BallTriangle } from 'react-loader-spinner';
import { motion } from 'framer-motion';

const Success = () => {

    const location: any = useLocation();
    const orderId = location.state.id;

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