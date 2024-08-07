import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
const Productdisp = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='productDisplay'>
      <div className="productdisplay-left">
        <div className="productdispaly-imagelist">
          <img src={product.imageUrl} alt="" />
          <img src={product.imageUrl} alt="" />
          <img src={product.imageUrl} alt="" />
          <img src={product.imageUrl} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.imageUrl} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.price * 1.2}</div>
          <div className="productdisplay-right-price-new">${product.price}</div>
        </div>
        <div className="productdisplay-right-description">

        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category :</span> {product.category}</p>
        <p className='productdisplay-right-category'>
          <span>Stock : </span>
          {product.productStock > 10 ? (
            <span style={{ color: 'green' }}>Stock Available</span>
          ) : product.productStock > 5 ? (
            <span style={{ color: 'orange' }}>Limited Stock</span>
          ) : (
            <span style={{ color: 'red' }}>Out of Stock</span>
          )}
        </p>

      </div>
    </div>
  )
}

export default Productdisp
