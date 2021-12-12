import React, { useState } from 'react'
import classes from "./ItemCart.module.css"
import cartIcon from "./../../Asset/cartIcon.png"
import { useHistory } from 'react-router';
import Mycart from '../Mycart/Mycart';
import { useRef } from 'react';

const ItemCart = () => {

   const [showMyCart, setShowMyCart] = useState(false)
   const history = useHistory()
   const myCartRef = useRef(null)


   const goToCheckout = (props) => {
      setShowMyCart(false)
      history.push("/checkout")
   }

   window.addEventListener('click', (e) => {
      if (myCartRef.current && !myCartRef.current.contains(e.target)) {
         setShowMyCart(false)
      }
   })

   return (
      <div ref={myCartRef}>
         <div className={showMyCart ? classes.myCartContainer : "d-none"}>
            <Mycart setShowMyCart={setShowMyCart} onClicked={goToCheckout} />
         </div>
         <div onClick={() => setShowMyCart(!showMyCart)} className={classes.itemCart}>
            <span className="bgSecondary-1 cWhite fs-12 fw-500 ">3</span>
            <img src={cartIcon} alt="cart-icon" />
         </div>
      </div>
   )
}

export default ItemCart
