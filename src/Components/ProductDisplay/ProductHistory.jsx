// import React, { useContext, useState } from 'react';
// import "../../Pages/CSS/ProductHistory.css"
// import { ShopContext } from '../../Context/ShopContext';


// const ProductHistory = () => {
//     const { products } = useContext(ShopContext);
    // const [deleteProductId, setDeleteProductId] = useState('');
    // const handleDelete = async (e, id) => {
    //     e.preventDefault();
    //     setDeleteProductId(id)
    //     if (!deleteProductId) {
    //         alert('Please enter a product ID');
    //         return;
    //     }

    //     try {
    //         const response = await fetch(`http://localhost:8080/products/${deleteProductId}`, {
    //             method: 'DELETE',
    //         });

    //         if (response.ok) {
    //             alert('Product deleted successfully');
    //             setDeleteProductId(''); // Clear input field
    //             fetchProducts(); // Refresh product list
    //         } else {
    //             alert('Failed to delete product');
    //         }
    //     } catch (error) {
    //         // alert('Network error');
    //     }
    // };


//     return (
//         <div className="product-history">
//             {products.map((product) => (
//                 <div className="product-card" key={product.id}>
//                     <img src={product.imageUrl} alt={product.name} className="product-image" />
//                     <div className="product-details">
//                         <h3 className="product-name">{product.name}</h3>
//                         <p className="product-price">${product.price.toFixed(2)}</p>
//                     </div>

// <div className='loginsignup-container'>


//     <form onSubmit={(e) => handleDelete(e, product.id)}>
//         <button type="submit">Delete</button>
//     </form>
//     <form onSubmit={(e) => handleUpdate(e, product.id)}>
//         <button type="submit">Update</button>
//     </form>
// </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ProductHistory;

import React, { useContext, useState } from 'react';
import "../../Pages/CSS/ProductHistory.css";
import { ShopContext } from '../../Context/ShopContext';

const ProductHistory = () => {
    const { products, fetchProducts } = useContext(ShopContext);
    const [updateProductId, setUpdateProductId] = useState(null);
    const [deleteProductId, setDeleteProductId] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        imageUrl: '',
        price: '',
        productStock: '',
        category: ''
    });

    const handleDelete = async (e, id) => {
        e.preventDefault();
        setDeleteProductId(id)
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


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        if (!updateProductId || !formData.name || !formData.description || !formData.imageUrl || !formData.price || !formData.productStock || !formData.category) {
            alert('Please fill all fields');
            return;
        }

        try {
            const response = await fetch(`http://localhost:8080/products/${updateProductId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Product updated successfully');
                setUpdateProductId(null);
                setFormData({
                    name: '',
                    description: '',
                    imageUrl: '',
                    price: '',
                    productStock: '',
                    category: ''
                }); // Clear input fields
                fetchProducts(); // Refresh product list
            } else {
                alert('Failed to update product');
            }
        } catch (error) {
            // alert(error);
        }
    };

    const handleUpdateClick = (product) => {
        setUpdateProductId(product.id);
        setFormData({
            name: product.name,
            description: product.description,
            imageUrl: product.imageUrl,
            price: product.price,
            productStock: product.productStock,
            category: product.category
        });
    };

    return (
        <div className="product-history">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.imageUrl} alt={product.name} className="product-image" />



                    <div className="product-details">
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                        <div className='loginsignup-container'>
                            <form onSubmit={(e) => handleDelete(e, product.id)}>
                                <button className="btn" type="submit">Delete</button>
                            </form>
                            <button className='btn' onClick={() => handleUpdateClick(product)}>Update</button>
                        </div>
                    </div>
                </div>
            ))}

            {updateProductId && (
                <div className="update-form">
    <h2>Update Product</h2>
    <form onSubmit={handleUpdate}>
        <div className="form-group">
            <div className="category-group">
                <label>
                    <input
                        type="radio"
                        name="category"
                        value="Men"
                        checked={formData.category === 'Men'}
                        onChange={handleChange}
                    />
                    Men
                </label>
                <label>
                    <input
                        type="radio"
                        name="category"
                        value="Women"
                        checked={formData.category === 'Women'}
                        onChange={handleChange}
                    />
                    Women
                </label>
                <label>
                    <input
                        type="radio"
                        name="category"
                        value="Kids"
                        checked={formData.category === 'Kids'}
                        onChange={handleChange}
                    />
                    Kids
                </label>
            </div>
        </div>

        <div className="form-group">
            <label>Name</label>
            <input
                type="text"
                name="name"
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label>Description</label>
            <input
                type="text"
                name="description"
                placeholder='Description'
                value={formData.description}
                onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label>Image URL</label>
            <input
                type="url"
                name="imageUrl"
                placeholder='Image URL'
                value={formData.imageUrl}
                onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label>Price</label>
            <input
                type="number"
                step="0.01"
                name="price"
                placeholder='Price'
                value={formData.price}
                onChange={handleChange}
            />
        </div>

        <div className="form-group">
            <label>Stock</label>
            <input
                type="number"
                name="productStock"
                placeholder='Stock'
                value={formData.productStock}
                onChange={handleChange}
            />
        </div>

        <button type="submit">Submit Update</button>
    </form>
</div>

            )}
        </div>
    );
};

export default ProductHistory;
