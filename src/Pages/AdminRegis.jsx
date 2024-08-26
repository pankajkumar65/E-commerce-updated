import React, { useState } from 'react';
import './CSS/Loginsignup.css';
import { Link } from 'react-router-dom';

const AdminRegis = ({ onSendmsg }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    category: '',
    productStock: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendMessageToParent = () => {
    const Navshow = "third";
    onSendmsg(Navshow);
    console.log("third");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description || !formData.imageUrl || !formData.price || !formData.category || !formData.productStock) {
      alert('Please fill in all fields');
      return;
    }

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
        setShowSuccessMessage(true);
        setFormData({
          name: '',
          description: '',
          imageUrl: '',
          price: '',
          category: '',
          productStock: '',
        });
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
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
        setDeleteProductId('');
      } else {
        alert('Failed to delete product');
      }
    } catch (error) {
      alert('Network error');
    }
  };

  return (
    <>
      {showSuccessMessage && (
        <div className="success-message">Product added successfully!</div>
      )}
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Add Products </h1>
          <form onSubmit={handleSubmit}>
            <div className="loginsignup-fields">
              <div className='flex gap-2'>
                <p className='text-xl'>Select category :</p>
                <div className='flex gap-8'>
                  <label className="flex items-center">
                    <input
                      style={{ width: "1.2vw", height: "1.2vw" }}
                      type="radio"
                      name="category"
                      value="Men"
                      checked={formData.category === 'Men'}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-1 text-gray-700">Men</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      style={{ width: "1.2vw", height: "1.2vw" }}
                      type="radio"
                      name="category"
                      value="Women"
                      checked={formData.category === 'Women'}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-1 text-gray-700">Women</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      style={{ width: "1.2vw", height: "1.2vw" }}
                      type="radio"
                      name="category"
                      value="Kids"
                      checked={formData.category === 'Kids'}
                      onChange={handleChange}
                      className="form-radio"
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
                className="inp"
                name="description"
                placeholder='Description'
                value={formData.description}
                onChange={handleChange}
                rows="4"
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
            <Link to="/producthistory">
              <button onClick={sendMessageToParent} className='w-6 h-4 border-2 border-black rounded-full'>See Listed Products</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminRegis;
