import { FaGripfire, FaUser } from 'react-icons/fa';
import { ShoppingCart } from './Shared/ShoppingCart';
import { Link } from 'react-router-dom';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
// import { Favorites } from '../pages/Favorites';
import { logout } from '../redux/apiCall';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { quantity } = useSelector((state: RootStateOrAny) => state.cart);
    // const { favoriteCount } = useSelector((state: RootStateOrAny) => state.favorites);
    const { currentUser } = useSelector((state: RootStateOrAny) => state.user);
    console.log(currentUser);
    const handleLogout = () => {
        logout(dispatch)
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
                    <div className="right">

                        {/* <div className="searchContainer">
                            <input className="input" type="text" />
                            <FaSearch className='icon' />
                        </div> */}
                        {/* <Link to={"/favorites"}>
                            < Favorites items={favoriteCount} />
                        </Link> */}
                        <Link to={"/cart"}>
                            <ShoppingCart items={quantity} />
                        </Link>
                        {
                            currentUser === null
                                ?
                                (
                                    <>
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
                    </div>
                </div>
            </div>
        </>
    )
}