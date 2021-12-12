import React from 'react'
import classes from "./Orderhistory.module.css"
import Product from '../../../../../Asset/productimg.png'

function PreviousWork() {
   return (
      <div className={classes.order_info}>
         <div className={classes.Order_list}>
            <div className={classes.mobile_desc}>
               <div className={classes.mobile_img}>
                  <img src={Product} alt="Product" />
               </div>
               <div className={classes.mobile}>
                  <p className={classes.mobile_code}>DMP-704448640</p>
                  <p className={classes.mobile_title}>Capsicum Red Color lorem ipsum sit ammet</p>
                  <p className={classes.mobile_purchase_date}>27 Feb 2021, 04:44 PM</p>
               </div>
            </div>

            <div className={classes.mobile_status}>
               <p className={classes.total_item}>Item:1</p>
               <p className={classes.total_price}>$1200.00</p>
               <div className={classes.order_status}>
                  <p className={classes.processing}>Processing</p>
               </div>
            </div>
         </div>

      </div >
   )
}

export default PreviousWork

