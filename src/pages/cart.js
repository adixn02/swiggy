import React from 'react'
import { useSelector } from 'react-redux'
const Cart = ()=>{
const cartItems = useSelector(store => store.cart.items)
// Calculate total price
const total = cartItems.reduce((sum, item) => sum + item.price || item.defaultPrice, 0) / 100;


    return (
   <>
      <h1>cart</h1> 
      {
            cartItems.map((item)=>(
                <div key={item.id} className='border m-3 p-3 d-flex justify-content-between'>
                    <div className='text'>
                <h1 className='h3'>{item.name}</h1>
                <p>{item.description}</p>
                <p>price - {item.price/100 || item.defaultPrice/100}</p>
                </div>
                    <img className='cartImage' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.imageId} alt={item.name} />
                
                </div>
            ))
      }
      <div className='text-center'>
          <h1>Total - {total}</h1></div>
   </>
        
       
    )
}

export default Cart