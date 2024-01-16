import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Cart ()  {

  const { isCartOpen, cartItems } = useSelector((state) => state.cart);


  const dispatch = useDispatch();

  return (
    <div>

    </div>
  )
}

export default Cart
