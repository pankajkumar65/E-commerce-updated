import React, { useContext } from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collections'; // Ensure this path is correct
import Item from '../item/item';
import { ShopContext } from '../../Context/ShopContext';

const NewCollections = () => {
    const { products } = useContext(ShopContext)
    const relatedProducts = products.slice(0, 8);
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
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

export default NewCollections;
