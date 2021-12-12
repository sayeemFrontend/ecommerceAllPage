import classes from "./Checkout.module.css"
import OrderDetails from '../../Components/OrderDetails/OrderDetails';
import PaymentInfo from "../../Components/PaymentInfo/PaymentInfo";

const Checkout = () => {
    const orderId = 1
    return (
        <div className={classes.checkout}>
            <p className="mb-3 fs-16 fw-500">Your Order</p>
            <div className="row">
                <div className="mb-0 mb-md-4 col-12 col-md-7">
                    <OrderDetails orderId={orderId} />
                </div>
                <div className="px-md-5 col-12 col-md-5">
                    <PaymentInfo />
                </div>
            </div>
        </div>
    );
}

export default Checkout;