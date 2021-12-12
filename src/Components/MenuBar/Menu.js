import { Link, useHistory } from "react-router-dom"
import classes from "./Menu.module.css"
import { useState } from 'react';
import person from "./../../Asset/DashProfile.png"
import AccountView from "../AccountView/AccountView";
import { useRef } from 'react';

const MenuBar = (props) => {
    const [user, setUser] = useState(true)
    const [profileShow, setProfileShow] = useState(false)
    const ignoredRef = useRef()
    const history = useHistory()
    return (
        <div className={"d-none d-md-flex " + classes.menuBarContainer}>
            <div className={"container-fluid container-lg " + classes.menuBar}>
                <div onClick={props.sidebarFun} className={"me-5 pointer " + classes.menuItem}>
                    <i className="fas fa-list-ul fa-xs "></i>
                    <p className="ms-1">Category</p>
                </div>


                <p>Popular</p>


                <div onClick={() => history.push("/product/all/")} className={"me-5 ps-1 pointer " + classes.menuItem}>
                    <p className="ms-1">New Product</p>
                </div>

                <div onClick={() => history.push("/product/all/")} className={"me-5 pointer " + classes.menuItem}>
                    <p> Promotion</p>
                    <span className=" ms-1 px-1 bgSecondary-1 fw-500 fs-12 cWhite rounded-pill">HOT</span>
                </div>

                <div onClick={() => history.push("/user/trackorder/")} className={"pointer " + classes.menuItem}>
                    <p className="ms-1">Track Your Order</p>
                </div>

                <div className={classes.profileMenu}>
                    <div ref={ignoredRef} className={"" + classes.menuItem}>
                        {
                            user ?
                                (
                                    <div onClick={() => setProfileShow(!profileShow)} className="pointer"><img src={person} alt="" width="40px" /></div>

                                ) : (
                                    <p className="ms-1 ">
                                        <Link className="text-decoration-none " to="/account/login"><span>Sign In</span></Link> / <Link className="text-decoration-none" to="/account/signup"><span>Register</span></Link>
                                    </p>
                                )
                        }

                    </div >
                    <div className={profileShow ? classes.profileModal : " d-none"}>
                        <AccountView ignoredRef={ignoredRef} setShowAccount={setProfileShow} showAccount={profileShow} />
                    </div>
                </div>

            </div >

        </div >
    );
}

export default MenuBar;