// import React, { useContext } from "react";
// import "./CartItems.css";
// import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from "../Assets/cart_cross_icon.png";
// const CartItems = () => {
//   const {
//     products,CartItems
//   } = useContext(ShopContext);
//   // const { product } = props;
//   return (
//     <div className="cartItems">
//       <div className="cartItems-format-main">
//         <p>Product</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />
//       {
//         {
//           CartItems.map((e=>console.log(e)))
//         }

//       /* {products.map((e) => {
//         if (cartItems[e.id] > 0) {
//           return (
//             <div>
//               <div className="cartitems-format cartItems-format-main">
//                 <img src={e.imageUrl} alt="" className="carticon-product-icon" />
//                 <p>{e.name}</p>
//                 <p>${e.price}</p>
//                 <button className="cartItem-quantity flex justify-between items-center">
//                   <span
//                     onClick={() => {
//                       removeFromCart(e.id);
//                     }}
//                     className="text-red-500 text-2xl"
//                   >
//                     -
//                   </span>
//                   {cartItems[e.id]}
//                   <span
//                     onClick={() => {
//                       addToCart(e.id);
//                     }}
//                     className="text-red-500 text-2xl"
//                   >
//                     +
//                   </span>
//                 </button>
//                 <p>${e.new_price * cartItems[e.id]}</p>
//                 <img
//                   className="cartitems-remove-icon"
//                   src={remove_icon}
//                   onClick={() => {
//                     removeFromCart(e.id);
//                   }}
//                   alt=""
//                 />
//               </div>
//             </div>
//           );
//         }
//         return null;
//       })} */}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Cart Totals</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               {/* <p>${getTotalCartAmount()}</p> */}
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               {/* <h3>${getTotalCartAmount()}</h3> */}
//             </div>
//           </div>
//           <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cartitems-promocode">
//           <p>If you have a promo code, Enter it here</p>
//           <div className="cartitems-promobox flex flex-row">
//             <input type="text" placeholder="promo code" />
//             <button>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;

// import React, { useContext } from "react";
// import "./CartItems.css";
// import { ShopContext } from "../../Context/ShopContext";
// import remove_icon from "../Assets/cart_cross_icon.png";

// const CartItems = () => {
//   const { products, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

//   const getTotalCartAmount = () => {
//     return products.reduce((total, product) => {
//       const quantity = cartItems[product.id] || 0;
//       return total + (product.price * quantity);
//     }, 0);
//   };

//   return (
//     <div className="cartItems">
//       <div className="cartItems-format-main">
//         <p>Product</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />



//       {cartItems.map((product) => {
//         if (cartItems[product.id] > 0) {
//           return (
//             <div key={product.id} className="cartitems-format cartItems-format-main">
//               <img src={product.productsData.imageUrl} alt="" className="carticon-product-icon" />
//               <p>{product.productsData.name}</p>
//               <p>${product.productsData.price}</p>
//               <button className="cartItem-quantity flex justify-between items-center">
//                 <span
//                   onClick={() => removeFromCart(product.id)}
//                   className="text-red-500 text-2xl"
//                 >
//                   -
//                 </span>
//                 {cartItems[product.id]}
//                 <span
//                   onClick={() => addToCart(product.id)}
//                   className="text-red-500 text-2xl"
//                 >
//                   +
//                 </span>
//               </button>
//               <p>${product.productsData.price * cartItems[product.id]}</p>
//               <img
//                 className="cartitems-remove-icon"
//                 src={remove_icon}
//                 onClick={() => removeFromCart(product.id)}
//                 alt=""
//               />
//             </div>
//           );
//         }
//         return null;
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//           <h1>Cart Totals</h1>
//           <div>
//             <div className="cartitems-total-item">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <p>Shipping Fee</p>
//               <p>Free</p>
//             </div>
//             <hr />
//             <div className="cartitems-total-item">
//               <h3>Total</h3>
//               <h3>${getTotalCartAmount()}</h3>
//             </div>
//           </div>
//           <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cartitems-promocode">
//           <p>If you have a promo code, Enter it here</p>
//           <div className="cartitems-promobox flex flex-row">
//             <input type="text" placeholder="promo code" />
//             <button>Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;

import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { products, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  // Function to calculate the total amount of the cart
  const getTotalCartAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.productsData.price * (cartItems.filter(cartItem => cartItem.productsData.id === item.productsData.id).length));
    }, 0);
  };

  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {cartItems.map((product) => {


        const productInCart = cartItems.filter(item => item.productsData.id === product.id);

        // If the product is in the cart, render its details
        if (productInCart.length > 0) {
          const quantity = productInCart.length; // Number of this product in cart
          return (
            <div key={product.id} className="cartitems-format cartItems-format-main">
              <img src={product.productsData.imageUrl} alt="" className="carticon-product-icon" />
              <p>{product.productsData.name}</p>
              <p>${product.productsData.price}</p>
              <button className="cartItem-quantity flex justify-between items-center">
                <span
                  onClick={() => removeFromCart(product.productsData.id)}
                  className="text-red-500 text-2xl"
                >
                  -
                </span>
                {quantity}
                <span
                  onClick={() => addToCart(product.productsData.id)}
                  className="text-red-500 text-2xl"
                >
                  +
                </span>
              </button>
              <p>${product.productsData.price * quantity}</p>
              <img
                className="cartitems-remove-icon"
                src={remove_icon}
                onClick={() => removeFromCart(product.productsData.id)}
                alt=""
              />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox flex flex-row">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

