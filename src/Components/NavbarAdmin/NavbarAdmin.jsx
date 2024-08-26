import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import logo from '../Assets/logo.png';
import './NavbarAdmin.css';

const NavbarAdmin = ({ onSendmsg}) => {
    const sendMessageToParent = () => {
        const Navshow = "first";
        onSendmsg(Navshow);
    };

    // const handleLogoutClick = () => {
    //     // Notify the parent component about the logout action
    //     onSendMsg("Logout Successfully!");

    //     // Redirect to login page (optional)
    //     setTimeout(() => {
    //         // Clear the message after 3 seconds
    //         onSendmsg("");
    //     }, 3000); // Message will disappear after 3 seconds
    // };

  

    const handleLogoutClick = () => {
        sendMessageToParent();
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000); // Message will disappear after 3 seconds
    };

    return (
        <div className='Navbar'>
            <div className='navbar1 flex justify-between px-24'>
                <Link to="/shop">
                    <div className="nav-logo">
                        <img src={logo} alt="Shopper Logo" />
                        <p>SHOPPER</p>
                    </div>
                </Link>
                <div className="relative group">
                    <Link to="/">
                        <button
                            className='w-24 h-12 text-lg border-2 border-grey rounded-full'
                            onClick={handleLogoutClick}
                        >
                            Logout
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default NavbarAdmin;
