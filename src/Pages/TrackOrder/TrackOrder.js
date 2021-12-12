import React from 'react'
import OrderAddress from './OrderAddress/OrderAddress'
import classes from './TrackOrder.module.css'
import OrderHistory from '../../Components/RenderAccountInfo/RenderablePages/OrderHistory/OrderHistory';

const TrackOrder = () => {
    return (
        <div className="">
            <p className="fs-30">Order History</p>


            <div className="row">
                <div className="col-12 col-lg-8">
                    <div className="mt-3">
                        <OrderHistory />
                    </div>

                    <div className="mt-3">
                        <OrderHistory />
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <OrderAddress />
                </div>
            </div>
        </div>
    )
}

export default TrackOrder
