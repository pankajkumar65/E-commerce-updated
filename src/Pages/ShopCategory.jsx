import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/Dropdown_icon.webp";
import Item from "../Components/item/item";

const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of {products.length} products
        </p>
        <div className="shopcategory-sort">
          <p>Sort by</p>
          <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products ">
        {products.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                description={item.description}
                image={item.imageUrl}
                new_price={item.price}
                old_price={item.price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
