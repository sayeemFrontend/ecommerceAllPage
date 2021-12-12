import classes from "./PaymentInfo.module.css"
import Button from '../Button/Button';
import BillingSummary from "../BillingSummary/BillingSummary";
import Paymethods from '../Paymethods/Paymethods';

const PaymentInfo = () => {
    return (
        <div className={classes.paymentInfo}>
            <div>
                <p className="mb-3 fs-16 fw-500">Billing Summery</p>
                <BillingSummary />
            </div>
            <div className="mt-3">
                <p className="mb-3 fs-16 fw-500">Payment Methods</p>
                <Paymethods />
            </div>

            <div className="py-2 my-5 px-3 bgPrimary-1 brPrimary-1 cWhite">
                <Button title="Confirm" />
            </div>

        </div>

    );
}

export default PaymentInfo;