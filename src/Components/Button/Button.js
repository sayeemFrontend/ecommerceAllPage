import classes from "./Button.module.css"

const Button = (props) => {
   return (
      <div className={classes.customButton}>
         <button onClick={props.onCanceled ? props.onCanceled : props.onClicked} className="text-capitalize d-flex align-items-center justify-content-center">
            {props.icon && <span className="me-1 me-sm-2">{props.icon}</span>}
            <h6>{props.title}</h6>
         </button>
      </div>
   );
}
export default Button;