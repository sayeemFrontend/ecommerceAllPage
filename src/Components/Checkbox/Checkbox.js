import React from "react";
import classes from "./Checkbox.module.css";
import { useState } from "react";

const Checkbox = (props) => {
  const { label } = props;
  const [checked, setChecked] = useState(false)
  return (
    <div className={classes.customCheckbox}>
      <div>
        <div onClick={() => setChecked(!checked)} className={classes.inputContainer + " " + (checked && classes.checked)}>
          {checked && <span>
            <i className="fas fa-check fa-xs"></i>
          </span>}
        </div>
      </div>
      {props.label && <p className="ms-3 fs-16 fw-400 "> {label}</p>}
    </div >
  );
};

export default Checkbox;
