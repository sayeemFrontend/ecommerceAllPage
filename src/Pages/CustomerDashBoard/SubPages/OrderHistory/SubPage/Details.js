import React from 'react'
import classes from "./Orderhistory.module.css"
import Product from '../../../../../Asset/productimg.png'

function Details() {
    return (
        <div className={classes.order_container}>
            <div className={classes.scroll}>
               <div className={classes.scroll_view}>
                  <div className={classes.order_background}>
                     <div className={classes.order_side_1}>
                        <div className={classes.order_number}>
                           <p className={classes.order_title_1}>Order number</p>
                           <p className={classes.order_title_2}>DMP-704448640</p>
                        </div>
                        <div className={classes.order_number}>
                           <p className={classes.order_title_1}>Date</p>
                           <p className={classes.order_title_2}>February 27, 2020</p>
                        </div>
                        <div className={classes.order_number}>
                           <p className={classes.order_title_1}>Total</p>
                           <p className={classes.order_title_2}>$ 2,800.00</p>
                        </div>
                        <div className={classes.order_number}>
                           <p className={classes.order_title_1}>Payment method</p>
                           <p className={classes.order_title_2}>Online Payment</p>
                        </div>
                     </div>
                  </div>
              

               {/* order details */}
               
               <div className={classes.detail_padding}>
                  <p className={classes.orderDetails}>Order Details</p>
               
                  <div className={classes.orderItem}>
                     <p className={classes.orderItem_1}>Description</p>
                     <div className={classes.orderItem_2}>
                        <p className={classes.amount}>Quality</p>
                        <p className={classes.amount}>Amount</p>
                        <p className={classes.amount}>Status</p>
                        <p className={classes.amount}>Actions</p>
                     </div>
                  </div>

                  <div className={classes.order_side_2}>
                     <div className={classes.order_side_3}>
                        <div className={classes.order_side_4}>
                           <img src={Product} alt="product" />
                        </div>
                        <p className={classes.order_side_5}>Capsicum Red Color </p>
                     </div >
                     <div className={classes.order_side_6}>
                        <p className={classes.processingOrder}>2 Kg</p>
                        <p className={classes.processingOrder}>BDT 2400</p>
                        <p className={classes.processingOrder} style={{ color: "#219653" }}>Processing</p>
                        <p className={classes.processingOrder}>Give Feedback</p>
                     </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* product purchase */}

            <div className={classes.product_purchase}>
               <button className={classes.paid_btn}>Paid</button>
               
               <div className={classes.product_history}>
                  <div className={classes.product_view}>
                     <p className={classes.product_price}>Product Price</p>
                     <p className={classes.product_price}>Shipping cost</p>
                     <p className={classes.product_price_total}>Total Pay</p>

                  </div>
                  <div className={classes.total_product_view}>
                     <p className={classes.product_price}>BDT 2,400</p>
                     <p className={classes.product_price}>BDT 400</p>
                     <p className={classes.product_price_total}>BDT 2,800.00</p>
                  </div>
               </div>
            </div>
         </div>      
    )
}

export default Details

