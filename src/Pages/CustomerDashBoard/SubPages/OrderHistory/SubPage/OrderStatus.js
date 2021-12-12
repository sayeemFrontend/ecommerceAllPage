import React from 'react'
import classes from "./Orderhistory.module.css"
import Placed from '../../../../../Asset/order_placed.png'
import Payment from '../../../../../Asset/payment.png'
import Delivered from '../../../../../Asset/delivered.png'
import Processed from '../../../../../Asset/order_processed.png'
import Pickup from '../../../../../Asset/pickup.png'

function OrderStatus() {
   const orderstatus = [
      { id: 0, title: 'Order Placed',alt: 'Order Placed',img: Placed },
      { id: 1, title: 'Payment Confirmed', alt: 'Payment Confirmed',img:Payment},
      { id: 2, title: 'Order List', alt: 'Order List', img: Processed},
      { id: 3, title: 'Ready to Pickup',alt: 'Ready to Pickup',  img: Pickup},
      { id: 4, title: 'Delivered',alt: 'Delivered',  img: Delivered},
    ]
   return (
         <div className={classes.order_history}>
            { orderstatus.map(data=>(
               <div className={classes.order_count} key={data.id} >
                  <div className={classes.order_processing}>
                     <img src={data.img} alt={data.alt} />
                  </div>
                  <p className={classes.placement}>{data.title}</p>
               </div>
            ))
            }    
         </div>
   )
}

export default OrderStatus
