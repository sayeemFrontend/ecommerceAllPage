
import React, { useState } from 'react'
import classes from "./QuantityFun.module.css"



const QuantityFun = (props) => {
   const [quantity, updateQuantity] = useState(1)
   return (
      <div className={classes.amount + " d-flex justify-content-between"}>
         <div onClick={() => quantity > 1 && updateQuantity(quantity - 1)} className={quantity > 1 ? classes.plusMinus + " " + classes.active : classes.plusMinus}><i class="fas fa-minus"></i></div>
         <div>{quantity} </div>
         <div onClick={() => updateQuantity(quantity + 1)} className={quantity < 50 ? classes.plusMinus + " " + classes.active : classes.plusMinus}><i class="fas fa-plus"></i></div>
      </div>
   )
}

export default QuantityFun
