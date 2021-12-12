
import React from 'react'
import classes from "./OrderHistory.module.css"
import Details from "./SubPage/Details"
import OrderStatus from "./SubPage/OrderStatus"
import PreviousWork from "./SubPage/PreviousWork"

function OrderHistory() {
    return (
        <div className="mb-5 pt-2" >
            <div className={classes.order_status +" justify-content-center col-lg-12 col-md-12 col-sm-12"}>
               <OrderStatus/>
            </div>
            
            <div className={classes.order_details + " justify-content-center col-lg-12 col-md-12 col-sm-12 pt-5"} >
                <Details/>
            </div>
            
            <div className={classes.order_history + " justify-content-center col-lg-12 col-md-12 col-sm-12 pt-5"} >
                <div >
                    <PreviousWork/>
                </div>
                <div className='pt-3'>
                    <PreviousWork/>
                    
                </div>
                <div className='pt-3 pb-3'>
                    <PreviousWork/>
                </div>  
            </div>     
        </div>
    )
}

export default OrderHistory
