import React, { Component } from 'react'
import './item.css'
import { Link } from 'react-router-dom'
const item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
      <p><b>{props.name}</b></p>
      <p>{props.description}</p>

      <div className="item-prices">
        <div className="item-price-new">
          ₹{props.new_price}
        </div>
        <div className="item-price-old">
          ₹{props.old_price * 1.2}
        </div>
      </div>

    </div>
  )
}

export default item
