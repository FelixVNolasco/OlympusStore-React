import React from 'react'
import { FaGripfire, FaUser } from 'react-icons/fa';
import { ShoppingCart } from './Shared/ShoppingCart';
import { Link } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Favorites } from '../pages/Favorites';


export const Navbar = () => {

    const { quantity } = useSelector((state: RootStateOrAny) => state.cart);
    const { favoriteCount } = useSelector((state: RootStateOrAny) => state.favorites);
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
                        <Link to={"/favorites"}>
                            < Favorites items={favoriteCount} />
                        </Link>
                        <Link to={"/cart"}>
                            <ShoppingCart items={quantity} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}