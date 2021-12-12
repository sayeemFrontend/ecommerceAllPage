import React from 'react'
import classes from "./OfferCategory.module.css"
import { useHistory } from "react-router";
import OfferImg from "./../../Asset/tomato.png"

const OfferCategory = () => {
    const history = useHistory()
    return (
        <div onClick={() => history.push("/product/all/")} className={classes.offer + " cursor-p"}>
            <img className="fit-content radius-8" src={OfferImg} alt="OfferImg" />
            <div className={classes.textOnimage}>
                <h1 className=" fs-12 fw-400 cWhite mb-2">Shop now</h1>
                <p className=" fs-18 fw-500 cWhite">Red Tomato<br /> Khaite Moja</p>
            </div>
        </div>
    )
}

export default OfferCategory
