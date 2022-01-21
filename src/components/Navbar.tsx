import React from 'react'
import { FaSearch, FaGripfire, FaUser } from 'react-icons/fa';
import { ShoppingCart } from './Shared/ShoppingCart';
import { Link } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';


export const Navbar = () => {

    const { quantity } = useSelector((state: RootStateOrAny) => state.cart);
    const { currentUser } = useSelector((state: RootStateOrAny) => state.user);

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
                        {
                            currentUser
                                ?
                                (
                                    <Link to={"/profile"}>
                                        <FaUser className='profileIcon'></FaUser>
                                    </Link>
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
                        {/* <div className="searchContainer">
                            <input className="input" type="text" />
                            <FaSearch className='icon' />
                        </div> */}
                        <Link to={"/cart"}>
                            <ShoppingCart items={quantity} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}