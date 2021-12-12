import { useRef, useState } from "react";
import classes from "./selectedInput.module.css";

const SelectedInput = (props) => {
   const [selBox, setSelBox] = useState(false)
   const modalRef = useRef()

   const changeInputValue = (op) => {
      props.selFunc(op)
      setSelBox(false)
   }

   window.addEventListener('click', (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
         setSelBox(false)
      }

   });


   let element;
   switch (props.type) {
      case "modal":
         element = (<div className={selBox ? classes.selBoxContainer + " " + classes.modalPosition : "d-none"}>
            {props.options ? props.options.map((op) => (
               <li key={op} onClick={() => changeInputValue(op)}>{op}</li>
            )) : null}
         </div>);
         break;
      default:
         element = (<div className={selBox ? classes.selBoxContainer + " " + classes.top27 + " " + (props.top && classes[props.top]) : "d-none"}>
            {props.options ? props.options.map((op) => (
               <li key={op} onClick={() => changeInputValue(op)}>{op}</li>
            )) : null}
         </div>)
         break;
   }

   return (
      <>
         {props.label ? <label className="text-capitalize"> {props.label} </label> : ""}

         <div ref={modalRef} className={classes.selectedInput} >
            <div onClick={() => setSelBox(!selBox)} className={!selBox ? classes.inputContainer : classes.inputContainer + " " + classes.rotate}>
               <input onChange={props.selFunc} name={props.name && props.name} type="text" readOnly value={props.value && props.value} placeholder="select from" />
               <span><i className='fas fa-chevron-down'></i></span>
            </div>
            {element}
         </div>
      </>

   );
}

export default SelectedInput;