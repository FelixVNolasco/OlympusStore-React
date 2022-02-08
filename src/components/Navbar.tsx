import { FaGripfire, FaUser } from 'react-icons/fa';
import { ShoppingCart } from './Shared/ShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
// import { Favorites } from '../pages/Favorites';
import { logout } from '../redux/apiCall';
import { LogoutAction } from '../redux/actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { quantity } = useSelector((state: RootStateOrAny) => state.cart);
    const { isAuthenticated } = useSelector((state: RootStateOrAny) => state.user);

    const handleLogout = () => {
        dispatch(LogoutAction());
        navigate("/");
    }

    return (
        <>
            <div className="container">
                <div className="navbar">
                    <div className="left">
                        <Link to={"/"}>
                            <div className='iconContainer'>
                                <FaGripfire className='icon' />
                                <span>Olympus</span>
                            </div>
                        </Link>
                    </div>
                    <div className="right animate__animated animate__fadeIn">
                        {/* <div className="searchContainer">
                            <input className="input" type="text" />
                            <FaSearch className='icon' />
                        </div> */}
                        {/* <Link to={"/favorites"}>
                            < Favorites items={favoriteCount} />
                        </Link> */}
                        {
                            isAuthenticated
                                ?
                                (
                                    <>
                                        <Link to={"/cart"}>
                                            <ShoppingCart items={quantity} />
                                        </Link>
                                        <Link to={"/profile"}>
                                            <FaUser className='profileIcon'></FaUser>
                                        </Link>
                                        <button className='logoutBtn' onClick={handleLogout}>Cerrar Sesión</button>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <Link to={"/auth/login"}>
                                            <p className='btn'>Login</p>
                                        </Link>
                                        <Link to={"/auth/signup"}>
                                            <p className='btn'>Sign Up</p>
                                        </Link>
                                    </>
                                )
                        }

                        {/* <Link to={"/cart"}>
                            <ShoppingCart items={quantity} />
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    )
}