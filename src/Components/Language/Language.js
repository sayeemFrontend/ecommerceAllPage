import classes from "./Language.module.css"

const Language = () => {
    return (
        <div className="d-flex align-items-center ">
            <p className="text-white">
                EN
            </p>
            <span className={"mx-2 " + classes.blockDraw}></span>
            <p className="text-black">
                বাং
            </p>

        </div>
    );
}

export default Language;