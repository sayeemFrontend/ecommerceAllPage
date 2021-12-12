import classes from "./Input.module.css"
import { useRef, useState } from 'react';

const Input = (props) => {
    let svg;
    switch (props.border) {
        case "error":
            svg = (<i className="fas fa-exclamation-circle fa-xs"></i>);
            break;
        case "ok":
            svg = (<i className="fas fa-check fa-xs"></i>);
            break;
        default:
            svg = null
            break
    }

    return (
        <>
            {props.label ? <label className="text-capitalize"> {props.label} </label> : ""}
            <div className={classes.customInput + " " + (props.border === "error" && classes.errorStyle) + " " + (props.border === "ok" && classes.okStyle)}>

                <div className="px-2 d-flex align-items-center">
                    <input placeholder={props.placeholder ? props.placeholder : ""} onChange={props.onChanged} value={props.value} type={props.type} />

                    {props.icon ? props.icon : svg}
                </div>
            </div>
        </>
    );


}
export default Input;