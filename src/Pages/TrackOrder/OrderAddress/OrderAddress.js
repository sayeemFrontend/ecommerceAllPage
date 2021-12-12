import React from 'react'
import Button from '../../../Components/Button/Button'
import classes from './OrderAddress.module.css'
const OrderAddress = () => {
    return (
        <div className="row bgTable  radius-8 pt-3 pb-5 px-3 ms-lg-2">

            <h1 className="fw-500 fs-16 lH-19 cSecondary-1 pb-2">#D0QSYC</h1>
            <p className="fw-500 fs-14 lH-19 cBlack-1 py-1 ">Name: <span className="fw-400 cBlack-3 ps-1">Imtiaz Chowdhury</span></p>
            <p className="fw-500 fs-14 lH-19 cBlack-1 py-1 ">Mobile: <span className="fw-400 cBlack-3 ps-1">01601192132</span></p>
            <p className="fw-500 fs-14 lH-19 cBlack-1 py-1 ">Email: <span className="fw-400 cBlack-3 ps-1">lotustechdev.com@gmail.com</span></p>
            <p className="fw-500 fs-14 lH-19 cBlack-1 py-1 ">Address: <span className="fw-400 cBlack-3 ps-1">H10, Road 2, Nikunja</span></p>

            <h1 className="fw-500 fs-16 lH-19 cSecondary-1 pt-3 pb-2">Delivery Information</h1>
            <p className="fw-500 fs-14 lH-19 cBlack-1 py-1 ">Location: <span className="fw-400 cBlack-3 ps-1">Khilkhet, Dhaka</span></p>
            <p className="fw-500 fs-14 lH-19 cBlack-1 py-1 ">Area: <span className="fw-400 cBlack-3 ps-1">Khilkhet, Dhaka</span></p>

            <h1 className="fw-500 fs-16 lH-19 cSecondary-1 pt-3 pb-2">Payment Status</h1>
            <div className={classes.payButton1 + " ms-2 mt-1 fs-12 radius-8 bgPrimary-1 cWhite d-flex justify-content-center align-content-center"}>
                <Button title="Not Paid" />
            </div>

            <h1 className="fw-500 fs-16 lH-19 cSecondary-1 pt-3 pb-2">Payment Method</h1>
            <div className={classes.payButton2 + " ms-2 mt-1 fs-12 radius-8 bgPrimary-1 cWhite d-flex justify-content-center align-content-center"}>
                <Button title="Cash on Delivery" />
            </div>

        </div>
    )
}

export default OrderAddress
