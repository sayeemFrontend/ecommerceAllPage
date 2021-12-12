import React from "react";
import classes from "./Toggle.module.css";

const Toggle = (props) => {
  const { onChecked, value, type, label } = props;
  return (
    <div className="m-5">
      {props.label ? (
        <label className={classes.switch}>
          <span className={classes.labelInput}>{label}</span>
          <input
            className={classes.regularCheckbox}
            onClick={onChecked}
            value={value}
            type={type}
          />
          <span className={classes.slider}></span>
        </label>
      ) : (
        ""
      )}
    </div>
  );
};

export default Toggle;
