
import { useRef, useState } from "react";

import { Route, Switch } from "react-router";
import HomePage from "../Pages/Home/HomePage";
import classes from "./Layout.module.css"
import Navbar from "../Components/Navbar/Navbar";
import ProductAll from './../Pages/ProductAll/productAll';
import ProductView from '../Pages/ProductView/productView';
import PasswordPage from './../Pages/Account/PasswordReset/PasswordPage';
import TrackOrder from "../Pages/TrackOrder/TrackOrder";
import PlaceOrder from "../Pages/PlaceOrder/PlaceOrder";
import Checkout from './../Pages/Checkout/Checkout';
import SideNav from '../Components/SideNav/SideNav';
import Profile from "../Pages/Account/Dashboard/Profile";
import SignUpPage from './../Pages/SignUpPage/SignUpPage';
import LoginPage from "../Pages/LoginPage/LoginPage";
import Footer from './../Components/Footer/footer';
import AddToCart from "../Pages/AddToCart/AddToCart";
import BottomNav from "../Components/BottomNav/BottomNav";
import SimpleSlider from "../Components/ReactSlick/slider";
import SliderTwo from "../Components/CustomSlider/sliderTwo";

function Layout() {
   const ignoredRef = useRef()
   const [sideBarOn, setSidebarOn] = useState(true)
   const faddingControl = (e) => {
      console.log(e.target);
      if (!ignoredRef.current.contains(e.target)) {
         setSidebarOn(false)
      }

   }
   return (
      <>
         <div className="">
            <Navbar sidebarFun={() => setSidebarOn(!sideBarOn)} sideBarOn={sideBarOn} />
            <div className={classes.customBody}>
               <div onClick={(e) => faddingControl(e)} className={sideBarOn && classes.sidebarFading}>
                  <div ref={ignoredRef} className={classes.sideNavContainer + " " + (sideBarOn && classes.onSide)}>
                     <SideNav />
                  </div>
               </div>


               <div className={classes.mainScreen + " " + (!sideBarOn && classes.onMain)}>
                  <div className={classes.ShowCard}>
                     <AddToCart />
                  </div>

                  <div className="">
                     <Switch >
                        <Route exact path='/'><HomePage /></Route>
                        <Route exact path='/product/all/'><ProductAll /></Route>
                        <Route path="/account/login" ><LoginPage /></Route>
                        <Route path="/account/signup"><SignUpPage /> </Route>
                        <Route path='/product/view'><ProductView /> </Route>
                        <Route path='/user/dashboard/'>< Profile /> </Route>
                        <Route path='/place/order/'>< PlaceOrder /> </Route>
                        <Route path='/checkout/'>< Checkout /> </Route>
                        <Route path='/forget/password/'><PasswordPage /> </Route>
                        <Route path='/user/trackorder/'>< TrackOrder /> </Route>
                        <Route path='/user/trackorder/'>< TrackOrder /> </Route>
                     </Switch>
                  </div>
               </div>

            </div>
            <Footer />
            <BottomNav />

         </div>


      </>
   );
}

export default Layout;