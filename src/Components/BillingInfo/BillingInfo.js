import classes from "./BillingInfo.module.css"
import taka from './../../Asset/taka.png'
import SelectedInput from '../SelectedInput/selectedInput';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { useState } from 'react';

const BillingInfo = () => {
    const [shippingModal, setShippingModal] = useState(false)
    const [promoCodeModal, setPromoCodeModal] = useState(false)

    const [country, updateCountry] = useState("Country")
    const [city, updateCity] = useState("City")
    const [promoCode, updatePromoCode] = useState("")
    const countryList = ["Bangladesh", "India", "Austrilia", "Japan"]
    const cityList = ["Afgan", "LolyPop", "Maha-City", "Jahid-Bhai"]

    return (
        <div className={"container-sm-fluid container-md " + classes.billingInfo}>
            <ul className="mb-2 d-flex align-items-center">
                <li className="flex-grow-1 cGray-5 fs-14">Sub Total</li>
                <li className=""><img src={taka} alt="" /><span className="ms-1 fs-14">15,000</span> </li>
            </ul>

            <ul onClick={() => setShippingModal(!shippingModal)} className="mb-2 d-flex align-items-center pointer">
                <li className="flex-grow-1 cGray-5 fs-14">Fee Shipping</li>
                <li className=""><span className={"downIcon " + (shippingModal && "rotate")}><i className='fas fa-chevron-down fa-xs'></i></span> </li>
            </ul>

            <div className={shippingModal ? " d-block" : "d-none"}>
                <div className="mb-2 py-2">
                    <SelectedInput top="top43" selFunc={(parm) => updateCountry(parm)} value={country} options={countryList} />
                </div>
                <div className="mb-2 py-2">
                    <SelectedInput top="top43" selFunc={(parm) => updateCity(parm)} value={city} options={cityList} />
                </div>
                <ul className="mb-2 d-flex align-items-center">
                    <li className="flex-grow-1 cGray-5 fs-14">Fee Shipping</li>
                    <li className=""><img src={taka} alt="" /><span className="fs-14">120</span> </li>
                </ul>

                <div className={"mb-2 py-2 px-3 cWhite " + (country !== "Country" ? "bgSecondary-1" : "bgGray-2")}>
                    <Button title="Update" />
                </div>
            </div>


            <ul onClick={() => setPromoCodeModal(!promoCodeModal)} className=" mb-2 d-flex align-items-center pointer">
                <li className="flex-grow-1 cGray-5">Apply Promo Code</li>
                <li className=""><span className={"downIcon " + (promoCodeModal && "rotate")}><i className='fas fa-chevron-down fa-xs'></i></span> </li>
            </ul>
            <div className={promoCodeModal ? "d-block" : "d-none"}>
                <div className="mb-2">
                    <Input onChanged={(e) => updatePromoCode(e.target.value)} />
                </div>

                <ul className="mb-2 d-flex align-items-center">
                    <li className="flex-grow-1 cGray-5">Voucher</li>
                    <li className=""><img src={taka} alt="" /><span className="ms-1 fs-14">-520</span> </li>
                </ul>
                <div className={"mb-2 py-2 px-3 cWhite " + (promoCode !== "" ? "bgSecondary-1" : "bgGray-2")}>
                    <Button title="Apply" />
                </div>
            </div>

            <ul className="mb-2 d-flex align-items-center">
                <li className="flex-grow-1 cGray-5 fs-14">Total</li>
                <li className=""><img src={taka} alt="" /><span className="ms-1 fs-14">17720</span> </li>
            </ul>

        </div>
    );
}

export default BillingInfo;