import classes from "./productView.module.css"
import pic01 from "../../Asset/cartImage.png"
import pic02 from "../../Asset/pic02.jpg"
import pic04 from "../../Asset/pic04.jpg"
import cover from "../../Asset/cover.png"
import pic05 from "../../Asset/dairy.png"
import SelectedInput from "../../Components/SelectedInput/selectedInput"
import { useState } from "react"
import Button from "../../Components/Button/Button"
import Cart from '../../Components/SingleCart/Cart';
import Slider from "../../Components/SliderView/slider"

const ProductView = () => {
   const imgList = [pic01, pic02, cover, pic04, pic05]
   const product = {
      img: [pic01, pic01, pic01, pic01, pic01, pic01],
      title: "Fresh Red & Yellow Capsicum (Net Weight ± 20 gm)",
      brand: "Radhuni",
      discount: 50,
      price: 2000,
      delevery_cost: 100,
   }
   const options = ["330gm", "440gm", "500gm"]
   const [quantity, updateQuantity] = useState(1)
   const [activeImg, setActiveImg] = useState(imgList[0])
   const [amount, setAmount] = useState(options[0])

   return (
      <div className={classes.productView}>
         <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-5">
               <div className={classes.imgContainer + " d-flex justify-content-center align-content-center"}>
                  <img src={activeImg} alt="activeimage" />
               </div>
               {/* for desktop */}
               <div className={classes.imgSlider + " d-none d-md-flex justify-content-around"}>
                  <Slider setActiveImg={setActiveImg} activeImg={activeImg} slideDisplay={4} imgList={imgList} styles={{ width: "50px", height: "50px" }} />
               </div>
               {/* for mobile */}
               <div className={classes.imgSlider + " d-flex justify-content-around d-md-none"}>
                  <Slider setActiveImg={setActiveImg} activeImg={activeImg} slideDisplay={3} imgList={imgList} styles={{ width: "50px", height: "50px" }} />
               </div>
            </div>

            <div className=" col-sm-12 col-md-12 col-lg-7">
               <p className={classes.title + " fs-30 fw-400 cGray-8 lH-3 mb-2"}>{product.title}</p>
               <p className="fs-16 fw-400 lH-19 cBlack-1 mt-3">Band Name:<span className="fw-500 cPrimary-1 ms-2">{product.brand}</span></p>
               <p className={classes.price + " cPrimary-1 fs-30 fw-600 lH-30 my-2"}>BDT<span className="ms-3">{product.price - (product.price * product.discount / 100)}</span></p>
               <p className="fs-18 fw-400 lH-2 cBlack-7">BDT{product.price}<span className="fs-18 fw-400 lH-2 cRed ms-3"> -{product.discount}%</span> </p>
               <p className="fs-16 fw-500 lH-2 c-Gray8 my-3">Shipping <span className="ms-2">BDT 100.00</span> </p>
               <div className={classes.selectedInput}>
                  <SelectedInput selFunc={setAmount} value={amount} id="quantity" options={options} />
               </div>

               <p className="fs-16 fw-400 lH-19 cGray-8 my-3">Availability: <span className="fw-500 cBlack-10 ms-2" >123434343 units</span></p>
               <p className="fs-16 fw-400 lH-19 cGray-8 ">Quantity: <span></span></p>
               <div className={classes.amount}>
                  <div onClick={() => quantity > 1 && updateQuantity(quantity - 1)} className={quantity > 1 ? classes.plusMinus + " " + classes.active : classes.plusMinus}><i class="fas fa-minus"></i></div>
                  <div>{quantity} </div>
                  <div onClick={() => updateQuantity(quantity + 1)} className={quantity < 50 ? classes.plusMinus + " " + classes.active : classes.plusMinus}><i class="fas fa-plus"></i></div>
               </div>
               <div className={classes.btnContainer}>
                  <div className={classes.buyButton + " fs-12 bgWhite cPrimary-1 brPrimary-1 d-flex justify-content-center align-content-center"}>
                     <Button title="Buy Now" />
                  </div>
                  <div className={classes.addtoBag + " ms-0 ms-md-0 ms-lg-3 mt-4 mt-md-4 mt-lg-0 fs-12 radius-8 bgPrimary-1 cWhite d-flex justify-content-center align-content-center"}>
                     <Button title="Add to Bag" />
                  </div>
               </div>
            </div>
         </div>

         <div className={classes.description}>
            <p className="fs-18 fw-500 lH-24 cPrimary-1 mt-5">Description</p>
            <p className=" fs-16 fw-400 lH-24 cBlack-5 mt-3">
               Description Origin: BangladeshGentle, alcohol-free formula.Kills 99.9% of bacteriaPre-moistured with waterLight-scentedIngredients: Leaf juice, water, Disodium EDTA, glycerin, citric acid, benzalkonium chloride, sodium benzoate, polysorbate 20, aloe barbadensis, Vitamin E, Fragrance.Quantity: 80 Pcs.
            </p>
         </div>

         <div className="mt-5 mb-3">
            <p className="fs-18 fw-500 lH-24 cPrimary-1 mt-5 mb-4">Combo Offer</p>
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
               </div>
            </div>
         </div>
      </div>
   );
}

export default ProductView;