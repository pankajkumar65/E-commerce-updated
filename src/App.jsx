import './App.css';
import Navbar from './Components/Navbar/Navbar';
import NavbarBL from './Components/NavbarBeforeLogin/NavbarBL';
import NavbarAdmin from './Components/NavbarAdmin/NavbarAdmin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Footer from './Components/footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import Admin from './Pages/Admin';
import Adminsignup from './Pages/Adminsignup';
import AdminRegis from './Pages/AdminRegis';
import Newsletter from './Components/Newslatter/Newsletter';
import { useState } from 'react';
import { ShopProvider } from './Context/ShopContext';  // Ensure the correct path
import ProductHistory from './Components/ProductDisplay/ProductHistory';

function App() {
  let flag1 = "first";
  let flag2 = "second";
  let flag3 = "third";
  
  const [Navshow, setNavshow] = useState("first");
  const [showLogoutMessage, setShowLogoutMessage] = useState(false); // New state for logout message

  const handleShow = (childData) => {
    setNavshow(childData);
    if (childData === "first") {
      setShowLogoutMessage(true); // Show logout message when navigating to the login page
    }
  };

  const navbar =
    Navshow === flag1 ? (
      <NavbarBL onSendmsg={handleShow} />
    ) : Navshow === flag2 ? (
      <Navbar onSendmsg={handleShow} />
    ) : Navshow === flag3 ? (
      <NavbarAdmin onSendmsg={handleShow} />
    ) : null;

  return (
    <ShopProvider>
      <BrowserRouter>
        {navbar}
        <Routes>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="Men" />}></Route>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="Women" />}></Route>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="Kids" />}></Route>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/Signup' element={<LoginSignup />} />
          <Route path='/' element={<Login onSendmsg={handleShow} showLogoutMessage={showLogoutMessage} />} />
          <Route path='/producthistory' element={<ProductHistory />} />
          <Route path='/admin' element={<Admin onSendmsg={handleShow} />} />
          <Route path='/adminsignup' element={<Adminsignup />} />
          <Route path='/adminregis' element={<AdminRegis onSendmsg={handleShow} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ShopProvider>
  );
}

export default App;
