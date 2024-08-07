import React, { useContext } from 'react';
import './Popular.css';
// import data_product from '../Assets/data';
import Item from '../item/item';
import { ShopContext } from '../../Context/ShopContext';

const Popular = () => {
  const { products } = useContext(ShopContext);
  const relatedProducts = products.slice(0, 10);
  return (
    <div className='popular'>
      <h1>All PRODUCTS</h1>
      <hr />
      <div className='popular-item'>
        {relatedProducts.map((item, i) => {
          return <Item
            key={i}
            id={item.id}
            name={item.name}
            description={item.description}
            image={item.imageUrl}
            new_price={item.price}
            old_price={item.price}
          />;
        })}
      </div>
    </div>
  );
};

export default Popular;
