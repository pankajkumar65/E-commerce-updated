// import React, { createContext, useState, useEffect } from 'react';
// import { useClient } from './ClientContext';


// export const ShopContext = createContext();

// export const ShopProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const { client, setClient } = useClient();

//   useEffect(() => {
//     fetch('http://localhost:8080/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);

//   useEffect(() => {
//     fetch(`http://localhost:8080/cart/getAllCartProduct/lakhansingh89234@gmail.com`)
//       .then(response => response.json())
//       .then(data => setCartItems(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, [client]);


//   const addToCart = async (productId) => {
//     setCartItems(prevItems => ({
//       ...prevItems,
//       [productId]: (prevItems[productId] || 0) + 1
//     }));

//     try {
//       await fetch('http://localhost:8080/cart/insertCart', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           client: {
//             email: client // assuming 'client' is an email string or an object with an email property
//           },
//           productsData: {
//             id: productId
//           }
//         })
//       });
//     } catch (error) {
//       alert(error)
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const getTotalCartItems = () => {
//     return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
//   };

//   const removeFromCart = async (productId) => {
//     setCartItems(prevItems => {
//       const updatedItems = { ...prevItems };
//       if (updatedItems[productId] > 1) {
//         updatedItems[productId] -= 1;
//       } else {
//         delete updatedItems[productId];
//       }
//       return updatedItems;
//     });

//     try {
//       await fetch('http://localhost:8080/cart/removeCart', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           productId: productId,
//           clientEmail: 'your-email@example.com' // replace with actual client email
//         })
//       });
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     }
//   };
//   // useEffect(() => {
//   //   fetch('http://localhost:8080/products')
//   //     .then(response => response.json())
//   //     .then(data => setProducts(data))
//   //     .catch(error => console.error('Error fetching products:', error));
//   // }, []);

//   const contextValue = {
//     products,
//     cartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartItems
//   };
//   return (
//     <ShopContext.Provider value={contextValue}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

import React, { createContext, useState, useEffect } from 'react';
import { useClient } from './ClientContext';

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { client, setClient } = useClient();

  useEffect(() => {
    fetch('http://localhost:8080/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    if (client) {
      fetch(`http://localhost:8080/cart/getAllCartProduct/${client}`)
        .then(response => response.json())
        .then(data => setCartItems(data))
        .catch(error => console.error('Error fetching cart items:', error));
    }
  }, [client]);

  const addToCart = async (productId) => {



    try {
      await fetch('http://localhost:8080/cart/insertCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({

          client: {
            email: client
          },
          productsData: {
            id: productId
          }
        })
      });

      // Update local cartItems after successful addition
      setCartItems(prevItems => [
        ...prevItems,
        {
          id: new Date().getTime(), // Generate a temporary ID for this new item
          client: { email: client },
          productsData: { id: productId } // Add more fields if necessary
        }
      ]);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const removeFromCart = async (productId) => {

    try {
      await fetch('http://localhost:8080/cart/removeCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: pid,
          client: {
            email: client // Assuming 'client' is an email string or you might need to adjust according to your context
          },
          productsData: {
            id: productId
          }
        })

      });

      // Update local cartItems after successful removal
      setCartItems(prevItems => prevItems.filter(item => item.productsData.id !== productId));
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const getTotalCartItems = () => {
    return cartItems.length;
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};
