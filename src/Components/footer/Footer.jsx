import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom'
import footer_image from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_image} alt="" />
        <p>SHOPPER</p> 
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer_icon_container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer_icon_container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer_icon_container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright bg-black m-0">
        <hr />
        <div className="flex text-white">
          copyright<span className=" mx-2 my-1 w-6 h-6 bg-white text-black text-center rounded-full pb-4 text-lg">
            C
          </span>
          <p> 2024 SHOPPER - All right reserved.</p>
        </div>
      </div>
    </div>

  );
};

export default Footer;
