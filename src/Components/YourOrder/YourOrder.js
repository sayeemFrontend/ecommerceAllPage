import React from 'react'
import OrderItem from "../../Asset/cartImage.png"
import TakaSign from "../../Asset/taka.png"
import classes from "./YourOrder.module.css"

const YourOrder = () => {

    return (
        <>
            <div className="row bgTable radius-8">
                <div className="col-12 col-sm-6 col-md-6 col-lg-6">

                    <div className="row d-block d-sm-block d-md-block d-lg-block borderTop">
                        <p className="col-12 fw-500 fs-16 cBlack-1 pt-4 lH-19">Product</p>
                    </div>

                    <div className={classes.productSec + " row d-flex align-items-center pt-4"}>
                        <div className={classes.trash + " col-1 pointer"}>
                            <i class="far fa-trash-alt"></i>
                        </div>

                        <div className="col-2 ">
                            <img className="radius-8" src={OrderItem} alt="Order Item" height="45px" />
                        </div>

                        <div className="col-8 ps-5">
                            <p className="fw-400 fs-14 cBlack-1 lH-19">Red & Yellow Capsicum </p>
                            <p className="fw-400 fs-14 cBlack-1 lH-19">(Net Weight ± 20 gm)</p>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-6 ">

                    <div className='row d-flex borderTop pt-4'>
                        <p className="col-4 fw-500 fs-16 cBlack-1 lH-19">Price</p>
                        <p className="col-4 fw-500 fs-16 cBlack-1 lH-19">Qty</p>
                        <p className="col-4 fw-500 fs-16 cBlack-1 lH-19">SubTotal</p>
                    </div>

                    <div className={classes.productSec + " row d-flex align-items-center pt-4"}>

                        <p className="col-4 fw-400 fs-14 cBlack-1 lH-19">BDT 21</p>

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

export default YourOrder
