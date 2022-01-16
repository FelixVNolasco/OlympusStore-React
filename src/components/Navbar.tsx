import React from 'react'
import { FaSearch, FaGripfire } from 'react-icons/fa';
import { ShoppingCart } from './Shared/ShoppingCart';
import { Link } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';


export const Navbar = () => {

    const { quantity } = useSelector((state: RootStateOrAny) => state.cart)

    console.log(quantity);
    return (
        <>
            <div className="containerNavbar">
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
                        <div className="searchContainer">
                            <input className="input" type="text" />
                            <FaSearch className='icon' />
                        </div>
                        <Link to={"/auth/login"}>
                            <p className='btn'>Login</p>
                        </Link>
                        <Link to={"/auth/signup"}>
                            <p className='btn'>Sign Up</p>
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