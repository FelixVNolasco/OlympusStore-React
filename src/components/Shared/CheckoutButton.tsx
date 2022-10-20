// import { useSelector, RootStateOrAny } from 'react-redux';
// import axios from 'axios';

export const CheckoutButton = ({ items }) => {

    // const { _id } = useSelector((state: RootStateOrAny) => state.user.currentUser);

    const handleCheckout = async () => {
        const res = await fetch(`https://olympus-backend.vercel.app/api/stripe/create-checkout-session`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        const body = await res.json()
        window.location.href = body.url
    };
    return (
        <>
            <button className='checkoutButton' onClick={() => handleCheckout()}>Comprar</button>
        </>
    );
};
