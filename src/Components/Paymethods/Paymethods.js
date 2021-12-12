import classes from "./Paymethods.module.css"
import Mastercard from "../../Asset/mastercard.png"
import American from "../../Asset/american.png"
import Visa from "../../Asset/visa.png"
import Radio from '../Radio/Radio';
import { useState } from 'react';

const Paymethods = () => {
    const [payMethod, updatePaymethod] = useState()
    const [creditCart, updateCredit] = useState()

    return (
        <div className={classes.paymentInfo}>
            <Radio onClicked={(e) => updatePaymethod(e.target.value)} name="paymethod" value="cash" label="Cash on Delevery" />
            <Radio onClicked={(e) => updatePaymethod(e.target.value)} name="paymethod" value="creditCard" label="Credit/Debit Card" />
            {payMethod === "creditCard" &&
                <div className="ms-5">
                    <Radio onClicked={(e) => updateCredit(e.target.value)} name="creditCard" value="masterCard" label="Master Card" icon={Mastercard} />
                    <Radio onClicked={(e) => updateCredit(e.target.value)} name="creditCard" value="visa" label="Visa Card" icon={Visa} />
                    <Radio onClicked={(e) => updateCredit(e.target.value)} name="creditCard" value="masterCard" label="Master Card" icon={American} />
                </div>
            }
            <Radio onClicked={(e) => updatePaymethod(e.target.value)} name="paymethod" value="rocket" label="Rocket" />
            <Radio onClicked={(e) => updatePaymethod(e.target.value)} name="paymethod" value="bkash" label="Bkash" />
            <Radio onClicked={(e) => updatePaymethod(e.target.value)} name="paymethod" value="nagad" label="Nagad" />



            {/* <label className={classes.cashOne} activeClassName={classes.visited}>
                <input type="radio" id="cash" name="payment" value="cash" />
                <span className="ps-3">
                    <p className={classes.debit}></p>
                    <p className={classes.time}>Processing time 2-4 hours</p>
                </span>
                <span className="ps-3">
                    {" "}
                    <img className={classes.method} src={Mastercard} alt="mastercard" />
                </span>
                <span className="ps-3">
                    {" "}
                    <img className={classes.method} src={Visa} alt="visa" />
                </span>
                <span className="ps-3">
                    {" "}
                    <img className={classes.method} src={American} alt="amrerican" />{" "}
                </span>
            </label>
            <label className={classes.cashTwo} activeClassName={classes.visited}>
                <input type="radio" id="cash" name="payment" value="cash" />
                <span>
                    <p className={classes.cashOn}>Cash On Delivery</p>
                </span>
            </label>
            <label className={classes.cashTwo} activeClassName={classes.visited}>
                <input type="radio" id="cash" name="payment" value="cash" />
                <span>
                    <p className={classes.cashOn}>Bkash</p>
                </span>
            </label>
            <label className={classes.cashTwo} activeClassName={classes.visited}>
                <input type="radio" id="cash" name="payment" value="cash" />
                <span>
                    <p className={classes.cashOn}>Nagad</p>
                </span>
            </label>
            <label className={classes.cashTwo} activeClassName={classes.visited}>
                <input type="radio" id="cash" name="payment" value="cash" />
                <span>
                    <p className={classes.cashOn}>Rocket</p>
                </span>
            </label>
         */}
        </div>
    );
}

export default Paymethods;