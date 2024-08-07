import React, { useEffect, useState } from 'react';
import './CSS/Loginsignup.css';

import userLogo from './user_logo.png';
import { useAdmin } from '../Context/AdminContext';
import ProductHistory from '../Components/ProductDisplay/ProductHistory';

const AdminRegis = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    category: '',
    productStock: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'radio') {
      setFormData({ ...formData, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input (basic example, add more as needed)
    if (!formData.name || !formData.description || !formData.imageUrl || !formData.price || !formData.category || !formData.productStock) {
      alert('Please fill in all fields');
      return;
    }

    // Convert price and productStock to appropriate types
    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      productStock: parseInt(formData.productStock, 10),
    };

    try {
      const response = await fetch('http://localhost:8080/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        alert('Product added successfully');
        // Clear form data if needed
        setFormData({
          name: '',
          description: '',
          imageUrl: '',
          price: '',
          category: '',
          productStock: '',
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'An error occurred'}`);
      }
    } catch (error) {
      alert('Network error');
    }
  };

  const [deleteProductId, setDeleteProductId] = useState('');
  const handleDelete = async (e) => {
    e.preventDefault();
    if (!deleteProductId) {
      alert('Please enter a product ID');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/products/${deleteProductId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Product deleted successfully');
        setDeleteProductId(''); // Clear input field
        fetchProducts(); // Refresh product list
      } else {
        alert('Failed to delete product');
      }
    } catch (error) {
      // alert('Network error');
    }
  };

  const [token, setToken] = useState(sessionStorage.getItem('token'));

  const { admin, setAdmin } = useAdmin();

  return (
    <>
      <div>
        {/* <img src={userLogo} alt="" /> */}
      </div>
      <div className='loginsignup' style={{ height: "130vh" }}>
        <div className="loginsignup-container">
          <h1>Add Products </h1>
          <form onSubmit={handleSubmit}>
            <div className="loginsignup-fields">
              <div className='flex gap-2'>
                <p className='text-xl'>Select category :</p>
                <div className='flex gap-8'>
                  <label className="flex items-center">
                    <input
                      style={{ width: "1.2vw", height: "1.2vw", paddingLeft: "0", fontSize: "0" }}
                      type="radio"
                      name="category"
                      value="Men"
                      checked={formData.category === 'Men'}
                      onChange={handleChange}
                      className="form-radio h-1 w-1 text-blue-600 focus:ring-blue-600"
                    />
                    <span className="ml-1 text-gray-700">Men</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      style={{ width: "1.2vw", height: "1.2vw", paddingLeft: "0", fontSize: "0" }}
                      type="radio"
                      name="category"
                      value="Women"
                      checked={formData.category === 'Women'}
                      onChange={handleChange}
                      className="form-radio h-1 w-1 text-blue-600 focus:ring-blue-600"
                    />
                    <span className="ml-1 text-gray-700">Women</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      style={{ width: "1.2vw", height: "1.2vw", paddingLeft: "0", fontSize: "0" }}
                      type="radio"
                      name="category"
                      value="Kids"
                      checked={formData.category === 'Kids'}
                      onChange={handleChange}
                      className="form-radio h-1 w-1 text-blue-600 focus:ring-blue-600"
                      required
                    />
                    <span className="ml-1 text-gray-700">Kids</span>
                  </label>
                </div>
              </div>
              <input
                className="inp"
                type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
              <textarea style={{border: "1px solid #c9c9c9"}}
                className="inp border-2 "
                name="description"
                placeholder='Description'
                value={formData.description}
                onChange={handleChange}
                rows="4" // Adjust rows as needed
                required
              />
              <input
                className="inp"
                type="url"
                name="imageUrl"
                placeholder='Image Url'
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
              <input
                className="inp"
                type="number"
                step="0.01"
                name="price"
                placeholder='Price'
                value={formData.price}
                onChange={handleChange}
                required
              />
              <input
                className="inp"
                type="number"
                name="productStock"
                placeholder='Stock'
                value={formData.productStock}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">ADD</button>
          </form>
          <div>
            <button className='w-6 h-4 border-2  border-black rounded-full'><a href='/producthistory'>See Listed Products</a></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminRegis;
