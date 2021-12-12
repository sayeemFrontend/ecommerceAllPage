
import React from 'react'
import { useHistory } from "react-router";
import classes from "./Categories.module.css"
import CategoryImg from "./../../Asset/olive-oil.jpg";

const Categories = () => {
    const history = useHistory()
    return (
        <div onClick={() => history.push("/product/all/")} className={classes.category + " d-flex flex-column align-items-center justify-content-center cursor-p brPrimary-1"}>
            <img className="fit-content" src={CategoryImg} alt="categoryimg" />
            <p className=" fs-12 fw-500 cBlack-1 mt-3 text-center">Cooking Oil & ghee</p>
        </div>
    )
}

export default Categories
