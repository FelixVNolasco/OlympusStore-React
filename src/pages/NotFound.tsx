import {Link} from "react-router-dom";

export const NotFound = () => {

    return (
        <>
            <div className="container mx-auto emptyCartContainer animate__animated animate__fadeIn animate__faster">
                <img className="icon"
                     src="https://res.cloudinary.com/dhyxqmnua/image/upload/v1664580579/Olympus/reshot-icon-error-site-X8Z67JF3AL_pkpdj4.svg"
                     alt=""/>
                <h2 className="md:text-xl font-semibold">ERROR 404</h2>
                <p className="text-center">Parece que fuiste direccionado a una dirección incorrecta 🫢</p>
                <div className="mt-4">
                    <Link
                        className="p-2 bg-gray-700 rounded-md text-amber-50 transition ease-in 150ms hover:bg-gray-700/90"
                        to={"/"} replace>Ir al Inicio</Link>
                </div>
            </div>
        </>
    )
}