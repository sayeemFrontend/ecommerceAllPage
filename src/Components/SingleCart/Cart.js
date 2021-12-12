import classes from "./Cart.module.css"
import SelectedInput from '../SelectedInput/selectedInput';
import { useState } from 'react';
import cartImage from "./../../Asset/beverages.png"
import takaIcon from "./../../Asset/takaIcon.png"
import bagIcon from "./../../Asset/bagIcon.png"
import QuantityFun from "../QuantityFun/QuantityFun";
import { useRef } from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button';
import { useEffect } from 'react';
import ModalView from "../ModalView/ModalView.jsx"


const Cart = (props) => {
    const ignoredRef = useRef()
    const [amountButton, setAmountButton] = useState(false)

    const cartItem = {
        name: "Red & Yellow Capsicum (Net Weight ± 20 gm)",
        newPrice: 180,
        oldPrice: 210,
        quantity: ["200 gm", "500 gm", " 700 gm", " 1 kg"]
    }
    const buttonIcon = <img className="pb-1" src={bagIcon} alt="" width="22px" />

    const [quantity, setQuantity] = useState(cartItem.quantity[0])

    //modal start

    const [modalShow, setModalShow] = useState(false)
    const history = useHistory()
    const [tempUrl, setTempUrl] = useState(window.localStorage.getItem("tempUrl"))

    const passUrl = "/product/view/"

    const modalControl = () => {
        if (!tempUrl) {
            setModalShow(true)
        }
        else {
            history.push(tempUrl)
        }
    }

    useEffect(() => {
        if (tempUrl) {
            history.push(tempUrl)
            window.localStorage.removeItem("tempUrl")
        }
    })
    // modal end

    // const toProductViewPage = (e) => {
    //     if (!ignoredRef.current.contains(e.target)) {
    //         history.push("/product/view/")
    //     }

    // }

    return (
        <div className={classes.cartContainer}>
            {/*  for moda view aadd this */}
            {modalShow && <ModalView passUrl={passUrl} setModalShow={setModalShow} />}
            <div className={classes.cart}>
                <div className={classes.cartContent}>
                    <div className={classes.cartImage} onClick={modalControl}>
                        {props.newItem && <h6 className={classes.newItem}>New</h6>}
                        <img className="rounded" src={cartImage} width="100%" alt="" />
                        <h5 className="text-center ">{cartItem.name}</h5>
                    </div>
                    <div className="px-0  px-md-2 d-flex flex-column align-items-center">
                        <div ref={ignoredRef} className={"my-3 " + classes.selectDiv}>
                            <SelectedInput selFunc={(parms) => setQuantity(parms)} name="quantity" value={quantity} options={cartItem.quantity} />
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <img src={takaIcon} width="13px" alt="" />
                                <h5 className="ms-1 text-black ">{cartItem.newPrice}</h5>
                            </div>
                            <div className="ps-4 d-flex align-items-center  text-decoration-line-through ">
                                <img src={takaIcon} width="11px" alt="" />
                                <h6 className="ps-1 text-black">{cartItem.oldPrice}</h6>
                            </div>
                        </div>
                    </div>
                </div>

                {/* button add or ammount */}

                {amountButton ? <QuantityFun /> : (
                    <div className="mt-3 py-1 fs-12  bgWhite cPrimary-1 brPrimary-1">
                        <Button onClicked={() => setAmountButton(true)} title="Add to Cart" icon={buttonIcon} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;