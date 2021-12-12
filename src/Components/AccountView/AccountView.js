import React from "react";
import classes from "./AccountView.module.css";
import Logo from "./Asset/logo.svg";
import Profile from "./Asset/profile.svg";
import Track from "./Asset/track_order.svg";
import Password from "./Asset/change_password.svg";
import Cancelation from "./Asset/cancelation.svg";
import Logout from "./Asset/log_out.svg";
import PaymentHistory from "./Asset/payment_history.svg";
import Orders from "./Asset/my_order.svg";
import { useRef } from "react"
import { useHistory } from 'react-router';

const AccountView = (props) => {
  const accountRef = useRef()
  const history = useHistory()

  window.addEventListener('click', (e) => {
    if (accountRef.current && props.ignoredRef.current) {
      if (!props.ignoredRef.current.contains(e.target) && !accountRef.current.contains(e.target)) {
        props.setShowAccount(false)
      }
    }
  })



  return (
    <div ref={accountRef} className={`mx-3 pb-3 bgPrimary-3 rounded ${classes.myAccount}`}>
      <div className="d-flex justify-content-center align-items-center bgPrimary-1 w-100 rounded-top">
        <div className="my-3">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <p className="pt-3 pb-4 text-center cBlack-2 fs-14 pointer">
        EN | বাং
      </p>

      <div className="px-3">
        <div onClick={() => history.push("/user/dashboard/") & props.setShowAccount(false)} className="d-flex my-2 ms-4 pointer">
          <img src={Profile} alt="Profile" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}>
            Manage My Account
          </p>
        </div>

        <div onClick={() => history.push("/user/trackorder/") & props.setShowAccount(false)} className="d-flex my-2 ms-4 pointer">
          <img src={Track} alt="Track" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}>
            Track your orders
          </p>
        </div>

        <div className="d-flex my-2 ms-4 pointer">
          <img src={Cancelation} alt="Cancelation" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}>Cancelation</p>
        </div>


        <div className="d-flex d-md-none my-2 ms-4 pointer">
          <img src={PaymentHistory} alt="PaymentHistory" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}>
            Popular
          </p>
        </div>

        <div className="d-flex d-md-none my-2 ms-4 pointer">
          <img src={Orders} alt="Orders" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}> New Product </p>
        </div>
        <div className="d-flex d-md-none my-2 ms-4 pointer">
          <img src={Orders} alt="Orders" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}> Promotion (HOT) </p>
        </div>
        <div className="d-flex my-2 ms-4 pointer">
          <img src={Logout} alt="Logout" />
          <p className={`fs-14 cBlack-1 ms-3 ${classes.title}`}> Log Out </p>
        </div>
      </div>
    </div>
  );
};

export default AccountView;
