import classes from "./productAll.module.css"
import { useHistory } from "react-router";
import Cart from '../../Components/SingleCart/Cart';

const ProductAll = () => {
   const history = useHistory()
   return (
      <>
         <div className="mt-5 mb-3 d-flex align-items-center justify-content-between">
            <p className="fs-18 fw-500">All Product</p>
         </div>
         <div className={classes.displayProducts}>
            <div className="row">
               <div className="col-6 col-md-3">
                  <Cart />
               </div>
               <div className="col-6 col-md-3">
                  <Cart />
               </div>
               <div className="col-6 col-md-3">
                  <Cart newItem />
               </div>
               <div className="col-6 col-md-3">
                  <Cart />
               </div>
               <div className="col-6 col-md-3">
                  <Cart />
               </div>
               <div className="col-6 col-md-3">
                  <Cart newItem />
               </div>
               <div className="col-6 col-md-3">
                  <Cart />
               </div>
               <div className="col-6 col-md-3">
                  <Cart newItem />
               </div>
               <div className="col-6 col-md-3">
                  <Cart />
               </div>
               <div className="col-6 col-md-3">
                  <Cart newItem />
               </div>
               <div className="col-6 col-md-3">
                  <Cart />
               </div>
               <div className="col-6 col-md-3">
                  <Cart newItem />
               </div>
               <div className="col-6 col-md-3">
                  <Cart />
               </div>
               <div className="col-6 col-md-3">
                  <Cart newItem />
               </div>
            </div>
         </div>
      </>

   );
}

export default ProductAll;