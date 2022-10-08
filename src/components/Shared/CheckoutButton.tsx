import { useSelector, RootStateOrAny } from 'react-redux';
import { userRequest } from '../../requestMethods';
import axios from 'axios';

export const CheckoutButton = ({ items }) => {

    const { _id } = useSelector((state: RootStateOrAny) => state.user.currentUser);

    const handleCheckout = () => {

        // userRequest.post("/stripe/create-checkout-session", { items, userId: _id }).then((response) => {
        //     console.log(response)
        // }).catch((error) => console.log(error.message));
        axios
            .post("https://olympus-backend.vercel.app/api/stripe/create-checkout-session", {
                items,
                userId: _id,
            })
            .then((response) => {
                if (response.data.url) {
                    window.location.href = response.data.url;
                }
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <>
            <button className='checkoutButton' onClick={() => handleCheckout()}>Comprar</button>
        </>
    );
};
