import React from 'react'
import { useHistory } from "react-router";
import classes from "./PopularBrand.module.css"
import BrandImg from "./../../Asset/radhuni.png";

const PopularBrand = () => {
    const history = useHistory()
    return (
        <div onClick={() => history.push("/product/all/")} className={classes.brand + " d-flex flex-column align-items-center justify-content-center radius-8 cursor-p"}>
            <img className=" fit-content" src={BrandImg} alt="brandimg" />
            <p className=" fs-16 fw-500 cBlack-1 mt-3 text-center">radhuni</p>
        </div>
    )
}

export default PopularBrand
