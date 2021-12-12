import React from 'react'
import classes from "./PlaceOrder.module.css"
import YourOrder from '../../Components/YourOrder/YourOrder';
import BillingInfo from '../../Components/BillingInfo/BillingInfo';
import Button from '../../Components/Button/Button';
import { useHistory } from 'react-router';

const PlaceOrder = () => {
   const history = useHistory()
   return (
      <div className={classes.placeOrder}>
         <div className='row'>
            <div className="col-12 col-md-8">
               <p className="mb-3 fs-20 fw-500">Your Order</p>
               <YourOrder />
            </div>
            <div className="col-12 col-md-4">
               <p className="mb-3 mt-4 mt-md-0 fs-20 fw-500">Price</p>
               <BillingInfo />
               <div className="py-2 my-5 px-3 cWhite bgPrimary-1 brPrimary-1">
                  <Button onClicked={() => history.push("/checkout/")} title="Checkout" />
               </div>
            </div>

         </div>
      </div>
   )
}

export default PlaceOrder;