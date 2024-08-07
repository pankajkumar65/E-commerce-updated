import React, { useContext } from 'react';
import './RelatedProduct.css';
import { ShopContext } from '../../Context/ShopContext';
import Item from '../item/item';

const RelatedProduct = ({ category, currentProductId }) => {
  const { products } = useContext(ShopContext);

  const relatedProducts = products.filter(item => item.category == category && item.id !== currentProductId).slice(0, 4);

  return (
    <div className='reletedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.imageUrl} new_price={item.price} old_price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;


