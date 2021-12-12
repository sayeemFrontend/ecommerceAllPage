import classes from "./ProductSlide.module.css"
import Pulses from "../../../Asset/pulses.png";
import Rice from "../../../Asset/Rice.png"
function ProductSlide() {

   const singleSlide1 = <div className={classes.product1}>
      <img src={Pulses} alt="pulses" />
      <h1>Pulses</h1>
   </div>
   const singleSlide2 = <div className={classes.product2}>
      <img src={Rice} alt="Rice" />
      <h1>Rice</h1>
   </div>

   return (

      <div className={classes.slideContainer}>
         <div className={classes.slide1}>
            {singleSlide1}
         </div>
         <div className={classes.slide2}>
            {singleSlide2}
         </div>
         <div className={classes.slide3}>
            {singleSlide1}
         </div>
      </div>
   );
}
export default ProductSlide