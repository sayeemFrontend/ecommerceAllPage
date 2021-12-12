import classes from "./Mycart.module.css";
import Tomato from "./Asset/item-1.png";
import Egg from "./Asset/egg.png";
import Cross from "./Asset/cross.png";
import Button from '../Button/Button';
import { useHistory } from 'react-router';

function Mycart(props) {
  const icon1 = <i className="fas fa-plus"></i>;
  const icon2 = <i className="fas fa-minus"></i>;
  const history = useHistory()
  return (
    <div className={"bg-white " + classes.mycart}>
      <div className="pt-4 pb-3">
        <h1 className="fw-500 fs-16 cBlack-10 text-center">My Cart</h1>
        <p className="pt-1 fs-12 cBlack-7 text-center">3 items in cart</p>
      </div>

      <div onClick={() => props.setShowMyCart(false)} className={classes.onCross}>
        <img src={Cross} alt="" />
      </div>

      <div className={`mx-4 mt-4 pb-4 ${classes.cartItems}`}>
        <div className="d-flex">
          <div className={classes.cartItemsImage}>
            <img src={Tomato} alt="Tomato" />
          </div>
          <div className="ms-3 w-50">
            <h1 className="fw-500 fs-14 cBlack-1">Red Capsicum</h1>
            <p className="mt-1 fs-12 cBlack-6">1 kg</p>
          </div>
          <div className={`ms-5 ${classes.productLine}`}>
            <button className={`bg-transparent ${classes.productLineBtn}`}>
              <img src={Cross} alt="cross" />
            </button>
          </div>
        </div>

        <div className="d-flex ms-5">
          <div className={`d-flex ps-4 ${classes.productQuantity}`}>
            <button className="fs-14 cBlock-10 bg-transparent">{icon2}</button>
            <h1 className="fw-600 fs-16 pt-1 l-spacing-2 cBlack-2 px-4">1</h1>
            <button className="fs-14 cPrimary-1 bg-transparent">{icon1}</button>
          </div>
          <div className={classes.productPrice}>
            <h1 className="fw-500 fs-14 cBlack-2 l-spacing-2">$ 180</h1>
          </div>
        </div>
      </div>

      {/* egg item */}

      <div className={`mx-4 mt-4 pb-4 ${classes.cartItems}`}>
        <div className="d-flex">
          <div className={classes.cartItemsImage}>
            <img src={Egg} alt="Egg" />
          </div>
          <div className="ms-3 w-50">
            <h1 className="fw-500 fs-14 cBlack-1">Egg Chicken Red</h1>
            <p className="mt-1 fs-12 cBlack-6">4pcs</p>
          </div>
          <div className={`ms-5 ${classes.productLine}`}>
            <button className={`bg-transparent ${classes.productLineBtn}`}>
              <img src={Cross} alt="cross" />
            </button>
          </div>
        </div>

        <div className="d-flex ms-5">
          <div className={`d-flex ps-4 ${classes.productQuantity}`}>
            <button className="fs-14 cBlack-11 bg-transparent">{icon2}</button>
            <h1 className="fw-600 fs-16 pt-1 l-spacing-2 cBlack-2 px-4">1</h1>
            <button className="fs-14 cPrimary-1 bg-transparent">{icon1}</button>
          </div>
          <div className={classes.productPrice}>
            <h1 className="fw-500 fs-14 cBlack-2 l-spacing-2">$ 180</h1>
          </div>
        </div>
      </div>

      {/* subtotal & button */}

      <div className="mt-4 d-flex align-items-center flex-column">
        <h1 className="fw-500 fs-16 cBlack-6 ">
          Subtotal : <span className="ps-5 fw-500 fs-16 cBlack-6 "> $ 540</span>
        </h1>
      </div>
      <div className="mx-4 my-4 py-2 fw-500 fs-16 bgPrimary-1 cBlack-9 brPrimary-1">
        <Button onClicked={() => history.push("/place/order/") & props.setShowMyCart(false)} title="Place Order >>" />
      </div>
    </div>
  );
}

export default Mycart;
