import classes from "./Navbar.module.css"
import Search from '../Search/Search';
import Button from '../Button/Button';
import ItemCart from '../ItemCart/ItemCart';
import Language from '../Language/Language';
import logo from "./../../../src/Asset/brandLogo.png"
import { useState } from 'react';
import { useRef } from 'react';
import AccountView from "../AccountView/AccountView";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import person from "./../../Asset/DashProfile.png"

const Navbar = (props) => {
    const [showAccount, setShowAccount] = useState(false)
    const [profileShow, setProfileShow] = useState(false)
    const accountHandlerRef = useRef()
    const [user, setUser] = useState(false)
    const history = useHistory()
    const ignoredRef = useRef()

    const onDotClick = () => {
        user ? setShowAccount(!showAccount) : history.push("/account/login/")
    }
    return (
        <div className={"d-flex align-items-center " + classes.navBarContainer}>

            <div className={"px-3 d-flex align-items-center justify-content-between " + classes.leftGroup}>
                <div className="pointer" onClick={props.sidebarFun}><i className=" text-white fas fa-bars fa-2x"></i></div>
                <div onClick={() => history.push("/")} className="d-none d-md-block pointer">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="flex-grow-1">
                <Search icon placeholder="Search for product (e.g mobile, tab)" />
            </div>
            <div className={"d-none d-md-flex align-items-center justify-content-between " + classes.rightGroup}>
                <h6>
                    <i className="mx-2 fas fa-phone"></i><span className="text-white">0193177823236</span>
                </h6>
                <h6 className="mx-1 mx-lg-5"><Language /></h6>
                {
                    user ? <div onClick={() => setProfileShow(!profileShow)} className="me-2 py-1 pointer"><img src={person} alt="" width="40px" /></div>
                        : <h5 className="pointer" onClick={() => history.push("/account/login/")}> Sign In</h5>
                }
                <div className={profileShow ? classes.profileModal : " d-none"}>
                    <AccountView ignoredRef={ignoredRef} setShowAccount={setProfileShow} showAccount={profileShow} />
                </div>
            </div>
            {/* <div className={classes.profileMenu}>
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
            </div> */}


            <div className={showAccount ? classes.accountContainer : " d-none"}>
                <AccountView ignoredRef={accountHandlerRef} setShowAccount={setShowAccount} showAccount={showAccount} />
            </div>

            <div ref={accountHandlerRef} onClick={onDotClick} className=" py-2 ms-3 d-flex flex-column justify-content-evenly d-md-none pointer">
                <span className={classes.dotIcon}></span>
                <span className={"my-1 " + classes.dotIcon}></span>
                <span className={classes.dotIcon}></span>
            </div>


        </div>
    );
}

export default Navbar;