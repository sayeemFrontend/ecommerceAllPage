import classes from "./MyCart.module.css";
import Pic01 from "../../Asset/pic01.png";
import Cross from "../../Asset/cross.png";


function MyCart(props) {
   const icon1 = <i class="fas fa-plus"></i>;
   const icon2 = <i class="fas fa-minus"></i>;

   return (
      <div className={classes.my_cart}>
         <div className={classes.my_cart_view}>
            <h1>My Cart</h1>
            <h2>3 items in cart</h2>
         </div>

         <div className={classes.cart_items}>
            <div className={classes.cart_view}>
               <div className={classes.cart_items_image}>
                  <img src={Pic01} alt="pic01" />
               </div>

               <div className={classes.cart_items_details}>
                  <div className={classes.product_name}>
                     <h1>Bell Pepper Red</h1>
                     <p>1kg, Price</p>
                  </div>
                  <div className={classes.product_quantity}>
                     <button className={classes.icon2}>{icon2}</button>
                     <h1> 1 </h1>
                     <button className={classes.icon1}> {icon1}</button>
                  </div>
               </div>
            </div>

            <div className={classes.product_line}>
               <button className={classes.product_line_btn}>
                  <img src={Cross} alt="cross" />
               </button>
               <h1>$4.99</h1>
            </div>
         </div>

         <div className={classes.cart_items}>
            <div className={classes.cart_view}>
               <div className={classes.cart_items_image}>
                  <img src={Pic01} alt="pic01" />
               </div>

               <div className={classes.cart_items_details}>
                  <div className={classes.product_name}>
                     <h1>Bell Pepper Red</h1>
                     <p>1kg, Price</p>
                  </div>
                  <div className={classes.product_quantity}>
                     <button className={classes.icon2}>{icon2}</button>
                     <h1> 1 </h1>
                     <button className={classes.icon1}> {icon1}</button>
                  </div>
               </div>
            </div>

            <div className={classes.product_line}>
               <button className={classes.product_line_btn}>
                  <img src={Cross} alt="cross" />
               </button>
               <h1>$4.99</h1>
            </div>
         </div>

         <div className={classes.product_total}>
            <h1>
               Subtotal: <span> $9.98</span>
            </h1>
            <button onClick={props.onClicked}> Checkout</button>
         </div>
      </div>
   );

}

export default MyCart;
