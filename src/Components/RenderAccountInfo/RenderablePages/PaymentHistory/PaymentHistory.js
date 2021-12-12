import classes from "./PaymentHistory.module.css"
import payment from "./payments.png"

const PaymentHistory = () => {
    return (
        <div className={classes.paymentHistory}>
            <p className=" mb-3 fs-30">Payment History</p>
            <div>
                <img src={payment} width="250px" alt="" />
            </div>

        </div>
    );
}

export default PaymentHistory;