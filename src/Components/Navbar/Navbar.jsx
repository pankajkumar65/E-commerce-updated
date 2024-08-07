import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import userLogo from '../Assets/user_logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { useClient } from '../../Context/ClientContext';

const Navbar = ({ onSendmsg }) => {
  const [menu, setMenu] = useState("shop");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [logoutMessageVisible, setLogoutMessageVisible] = useState(false); // State for logout message
  const { client, setClient } = useClient();
  const { message, getTotalCartItems } = useContext(ShopContext);

  const sendMessageToParent = () => {
    const Navshow = "first";
    onSendmsg(Navshow);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    // Optionally clear client state or perform other logout actions
    setClient(null);
    sendMessageToParent(); // Call the parent function if needed
    setLogoutMessageVisible(true); // Show logout message
    setTimeout(() => {
      setLogoutMessageVisible(false); // Hide message after 3 seconds
    }, 3000);
  };

  return (
    <div className='Navbar'>
      <div className='navbar'>
        <Link to="/shop">
          <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
          </div>
        </Link>

        <div className='nav-menu-container'>
          <div className='nav-dropdown' onClick={toggleDropdown}>
            {/* Hamburger Icon or Dropdown Toggle */}
            ☰
          </div>
          <ul className={`nav-menu ${dropdownVisible ? 'nav-menu-visible' : ''}`}>
            <li onClick={() => setMenu("shop")}>
              <Link style={{ textDecoration: 'none' }} to='/shop'>Shop</Link>
              {menu === "shop" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("mens")}>
              <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>
              {menu === "mens" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("womens")}>
              <Link style={{ textDecoration: 'none' }} to='/womens'>Womens</Link>
              {menu === "womens" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenu("kids")}>
              <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>
              {menu === "kids" ? <hr /> : <></>}
            </li>
          </ul>
        </div>
        <div className='nav-login-cart'>
          {/* User login and logout */}
          <div>
            <img className="userlogo" src={userLogo} alt="" />
            <p>{client}</p>
          </div>

          <Link to="/" onClick={handleLogout}>
            <button>Logout</button>
          </Link>
          <Link to="/cart">
            <img src={cart_icon} alt="" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
      {logoutMessageVisible && <div className='w-20 h-20'>Logout successfully</div>} {/* Conditional rendering for logout message */}
      <div className='message'>
        {message && <p>{message}</p>}
        
      </div>
    </div>
  );
};

export default Navbar;
