import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import logo from '../Assets/logo.png'
import userLogo from '../Assets/user_logo.png'
import './NavbarAdmin.css'
const NavbarAdmin = ({ onSendmsg }) => {
    const sendMessageToParent = () => {
        const Navshow = "first";
        onSendmsg(Navshow);
      };
    const [menu, setmenu] = useState("shop");
    const { message, getTotalCartItems } = useContext(ShopContext);
    return (
        <div className='Navbar'>
            <div className='navbar1 flex justify-between px-24'>
                <Link to="/shop">
                    <div className="nav-logo ">
                        <img src={logo} alt="" />
                        <p>SHOPPER</p>
                    </div>
                </Link>
                <div class="relative group">
                    <button class="flex items-center focus:outline-none">
                        {/* <img src={userLogo} alt="Profile" class="w-8 h-8 rounded-full mr-2" /> */}
                        {/* <span onClick={sendMessageToParent} class="text-gray-700 text-xl">Logout</span>  */}
                        <Link to="/"><button className='w-20 h-10 text-lg border-2 border-grey rounded-full' onClick={sendMessageToParent}>Logout</button></Link>
                         {/* <button onClick={sendMessageToParent}>Logout</button> */}
                    </button>
                    {/* <div class="absolute right-0 left-1 hidden w-48 mt-0 bg-white border border-gray-200 rounded shadow-lg group-hover:block">
                        <a href="/login" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-xl">Customer Login</a>
                        <a href="/admin" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-xl">Admin Login</a>
                    </div> */}
                </div>

            </div>
            <div className='message'>
                {message && <p>{message}</p>}
            </div>
        </div>
    )
}

export default NavbarAdmin
