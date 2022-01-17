import { useLocation } from 'react-router-dom';

export const Success = () => {

    const locationInfo = useLocation();
    console.log(locationInfo);
    return (
        <>
            <h4>Your purchase has been success!</h4>   
        </>
    )
}

