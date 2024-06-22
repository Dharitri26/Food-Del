import React, { useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets'

const Cart = () => {

    const {itemCount,food_list,addToCart} =useState(StoreContext)
     console.log(food_list);
  return (
    <div>
      <div className='cart'>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item,index)=>{
              if(itemCount[item._id]>0)
                {
                  return(
                    <div className='cart-items-title cart-items-item'>
                          <p>{item.name}</p>
                    </div>
                  )
                }
          })}
        </div>
      </div>
    </div>
  )
}

export default Cart
