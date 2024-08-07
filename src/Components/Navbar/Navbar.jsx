import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import userLogo from '../Assets/user_logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { useClient } from '../../Context/ClientContext';

const Navbar = ({ onSendmsg }) => {
  const sendMessageToParent = () => {
    const Navshow = "first";
    onSendmsg(Navshow);
  };

  const [menu, setMenu] = useState("shop");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { client, setClient } = useClient();
  const { message, getTotalCartItems } = useContext(ShopContext);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
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
          {/* user login and logout  */}
          <div>
            <img className="userlogo" src={userLogo} alt="" />
            <p>{client}</p>
          </div>

          <Link to="/"><button onClick={sendMessageToParent}>Logout</button></Link>
          <Link to="/cart"><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
      <div className='message'>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Navbar;
