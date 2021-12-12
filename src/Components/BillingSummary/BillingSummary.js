import classes from "./BillingSummary.module.css"
import taka from "./../../Asset/taka.png"

const BillingSummary = () => {
    return (
        <div className={classes.billingSummary}>
            <ul className="mb-2 d-flex align-items-center">
                <li className="flex-grow-1 cGray-5 fs-16">Product Cost(5)</li>
                <li className=""><img src={taka} alt="" /><span className="ms-1 fs-14 fw-500">15,000</span> </li>
            </ul>

            <ul className="mb-2 d-flex align-items-center">
                <li className="flex-grow-1 cGray-5 fs-16">Shipping free</li>
                <li className=""><img src={taka} alt="" /><span className="ms-1 fs-14 fw-500">1,000</span> </li>
            </ul>
            <ul className="mb-2 d-flex align-items-center">
                <li className="flex-grow-1 cGray-5 fs-16">Discount</li>
                <li className=""><img src={taka} alt="" /><span className="ms-1 fs-14 fw-500">-15,00</span> </li>
            </ul>

            <ul className="mb-2 d-flex align-items-center  border-top">
                <li className="flex-grow-1 cGray-5 fs-14 fw-600">Total Payment</li>
                <li className=""><img src={taka} alt="" /><span className="ms-1 fs-14 fw-600">15,00</span> </li>
            </ul>



            <div className={classes.checkoutBtn}>

            </div>
        </div>
    )
}

export default BillingSummary;