import React from 'react'
import { useSelector } from 'react-redux'
const Cart = ()=>{
const cartItems = useSelector(store => store.cart.items)
console.log(cartItems)
    return (
   
           <h1>car</h1> 
       
    )
}

export default Cart