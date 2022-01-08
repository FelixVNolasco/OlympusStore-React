import React from 'react'
import { FaSearch, FaGripfire } from 'react-icons/fa';
import { ShoppingCart } from './Shared/ShoppingCart';


export const Navbar = () => {

    return (
        <>
            <div className="navbarContainer">
                <div className="wrapper">
                    <div className="left">
                    <div className='iconContainer'>
                            <FaGripfire className='icon' />
                            <span>Olympus</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="searchContainer">
                            <input className="input" type="text" />
                            <FaSearch className='icon' />
                        </div>
                        <p className='btn'>Login</p>
                        <p className='btn'>Sign Up</p>
                        <ShoppingCart items={8} />
                    </div>
                </div>
            </div>
        </>
    )
}