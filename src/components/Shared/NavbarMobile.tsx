import { Link } from 'react-router-dom'
import { FaHome, FaBasketballBall, FaShoePrints, FaRunning, FaShoppingBag } from 'react-icons/fa';

export const NavbarMobile = () => {
    return (
        <div className="navbarMobile" id="mobile-menu">
            <div className="navbarContainer">

                <Link to={"#"} className="mobileNavbarItem">
                    <FaHome />
                    <span>Inicio</span>
                </Link>

                <Link to={"#"} className="mobileNavbarItem">
                    <FaBasketballBall />
                    <span className='unique'>Basket</span>
                </Link>

                <Link to={"#"} className="mobileNavbarItem">
                    <FaShoePrints />
                    <span>Soccer</span>
                </Link>

                <Link to={"#"} className="mobileNavbarItem">
                    <FaRunning />
                    <span>Running</span>
                </Link>

                <Link to={"#"} className="mobileNavbarItem">
                    <FaShoppingBag />
                    <span>Compras</span>
                </Link>

            </div>
        </div>
    )
}