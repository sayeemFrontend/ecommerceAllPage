import classes from "./Cart03.module.css"
import { useState } from 'react';
import cartImage from "./../../../Asset/beverages.png"
import takaIcon from "./../../../Asset/takaIcon.png"
import bagIcon from "./../../../Asset/bagIcon.png"
import { useRef } from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import Button from '../../Button/Button';
import ModalView from "../../ModalView/ModalView";
import QuantityFun from '../../QuantityFun/QuantityFun';
import SelectedInput from "../../SelectedInput/selectedInput";


const Cart = ({ item, newItem }) => {
    const ignoredRef = useRef()
    const [amountButton, setAmountButton] = useState(false)
    const [quantity, setQuantity] = useState(item.quantity[0])

    // const cartItem = {
    //     name: "Red & Yellow Capsicum (Net Weight ± 20 gm)",
    //     newPrice: 180,
    //     oldPrice: 210,
    //     quantity: ["200 gm", "500 gm", " 700 gm", " 1 kg"]
    // }
    const buttonIcon = <img className="pb-1" src={bagIcon} alt="" width="22px" />


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


    return (
        <div className={classes.cartContainer}>
            {/*  for modal view add this */}
            {modalShow && <ModalView passUrl={passUrl} setModalShow={setModalShow} />}
            <div className={classes.cart}>
                <div className={classes.cartContent}>
                    <div className={"pointer " + classes.cartImage} onClick={modalControl}>
                        {newItem && <h6 className={classes.newItem}>New</h6>}
                        <img className="rounded" src={cartImage} alt="" />
                        <h5 className="text-center ">{item.title}</h5>
                    </div>
                    <div className="py-2 px-0  px-md-2 d-flex flex-column align-items-center">
                        <div ref={ignoredRef} className={"my-3 " + classes.selectDiv}>
                            <SelectedInput selFunc={(parm) => setQuantity(parm)} name="quantity" value={quantity} options={item.quantity} />
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex align-items-center">
                                <img src={takaIcon} width="13px" alt="" />
                                <h6 className="ms-1 text-black ">{item.newPrice}</h6>
                            </div>
                            <div className="ps-4 d-flex align-items-center  text-decoration-line-through ">
                                <img src={takaIcon} width="10px" alt="" />
                                <h7 className="ps-1 text-gray">{item.oldPrice}</h7>
                            </div>
                        </div>
                    </div>
                </div>

                {/* button add or amount */}

                {amountButton ? <QuantityFun /> : (
                    <div className={" py-1 " + classes.btnContainer}>
                        <Button onClicked={() => setAmountButton(true)} title="Add to Cart" icon={buttonIcon} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;