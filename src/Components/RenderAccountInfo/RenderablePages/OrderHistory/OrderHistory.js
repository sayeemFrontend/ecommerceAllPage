import React from 'react'
import OrderItem from "../../../../Asset/cartImage.png"
import TakaSign from "../../../../Asset/taka.png"
import classes from "./OrderHistory.module.css"

const OrderHistory = () => {
    return (
        <>
            <div className="row bgTable radius-8">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">

                    <div className="row borderTop pt-4">
                        <p className="col-3 fw-500 fs-16 cBlack-1 lH-19">ID no</p>
                        <p className="col-9 fw-500 fs-16 cBlack-1 lH-19">Product</p>
                    </div>

                    <div className={classes.productSec + " row d-flex align-items-center pt-4"}>

                        <p className="col-3 fw-400 fs-14 cBlack-1 ">#D0QSYC</p>

                        <div className="col-2 ">
                            <img className="radius-8" src={OrderItem} alt="Order Item" height="45px" />
                        </div>

                        <div className="col-7 ps-5">
                            <p className="fw-400 fs-14 cBlack-1 lH-19">Red & Yellow Capsicum </p>
                            <p className="fw-400 fs-14 cBlack-1 lH-19">(Net Weight ± 20 gm)</p>
                            <p className="fw-400 fs-10 cBlack-6 mt-1 lH-19">November 29th 2020, 10:10 am</p>
                        </div>

                    </div>

                </div>

                <div className="col-12 col-sm-6 col-md-6 col-lg-6 ">

                    <div className='row d-flex borderTop pt-4'>
                        <p className="col-4 fw-500 fs-16 cBlack-1 lH-19">Status</p>
                        <p className="col-4 fw-500 fs-16 cBlack-1 lH-19">Qty</p>
                        <p className="col-4 fw-500 fs-16 cBlack-1 lH-19">SubTotal</p>
                    </div>

                    <div className={classes.productSec + " row d-flex align-items-center pt-4"}>

                        <p className="col-4 fw-500 fs-14 cPrimary-1 lH-24">Pending</p>

                        <div className={classes.quantity + " col-4 bgWhite d-flex align-items-center justify-content-center radius-8"}>
                            <p className="fw-400 fs-14 cBlack-1">2</p>
                        </div>

                        <div className="col-4 d-flex align-items-center">
                            <img src={TakaSign} alt="TakaSign" height="10px" width="8px" />
                            <p className="fw-400 fs-14 cBlack-1 ms-1">42</p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default OrderHistory
