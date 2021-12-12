import { useRef, useEffect } from "react"
import classes from "./Modal.module.css"
import CloseBTN from './../../Asset/crossbtn.png'
import ProductModalView from "../ProductModalView/ProductModalView"

const ModalView = ({ passUrl, setModalShow }) => {
    const modalRef = useRef()

    useEffect(() => {
        window.localStorage.setItem("tempUrl", "/product/view/")
    })

    const onOutsideClick = (e) => {
        if (e.target && e.target.contains(modalRef.current)) {
            setModalShow(false)
            window.localStorage.removeItem("tempUrl")
        }
    }


    return (
        <div onClick={onOutsideClick} className={classes.modalContainer}>
            <div ref={modalRef} className={classes.modalView}>
                <ProductModalView />
                <div onClick={() => setModalShow(false)} className={classes.crossIcon}>
                    <img src={CloseBTN} alt="CloseBTN" className='img-fluid' />
                </div>
            </div>
        </div>
    );
}

export default ModalView