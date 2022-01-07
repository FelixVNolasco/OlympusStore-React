import React from 'react'
import { FaSearch, FaGripfire } from 'react-icons/fa';
import { ShoppingCart } from './Shared/ShoppingCart';


export const Navbar = () => {

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <div className="left">
                        <div className="searchContainer">
                            <input className="input" type="text" />
                            <FaSearch className='icon' />
                        </div>
                    </div>
                    <div className="center">
                        <div className='iconContainer'>
                            <FaGripfire className='icon' />
                            <span>Olympus</span>
                        </div>

                    </div>
                    <div className="rigth">
                        <ShoppingCart items={8} />
                    </div>
                </div>
            </div>
        </>
    )
}