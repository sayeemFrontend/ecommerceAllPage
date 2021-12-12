import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import classes from "./ResetPassword.module.css"
import { useHistory } from 'react-router';

const ResetPassword = () => {
    const [page, setPage] = useState(0)
    const history = useHistory()

    let element;
    switch (page) {
        case 1:
            element = (
                <>
                    <p className=" mb-3 fs-14 fw-400">
                        We have sent an email with pass reset code to <span>ma***************@gmail.com</span>. Please enter it below
                    </p>
                    <div className="">
                        <Input placeholder="Type OTP here" label="OTP Code" />
                    </div>
                    <div className={"mt-4 bgPrimary-1 cWhite brPrimary-1 fw-500 fs-16 " + classes.customButton}>
                        <Button onClicked={() => setPage(2)} title="submit" />
                    </div>

                </>

            );
            break;
        case 2:
            element = (

                <>
                    <p className="mb-3 fs-14 fw-400">
                        Create new password that has at least 8 charecters long
                    </p>

                    <div className="mb-2">
                        <Input placeholder="Type Password here" label="Password" />
                    </div>

                    <div className="">
                        <Input placeholder="Type Password here" label="Confirm Password" />
                    </div>

                    <div className={"mt-4 bgPrimary-1 cWhite brPrimary-1 fw-500 fs-16 " + classes.customButton}>
                        <Button onClicked={() => history.push("/account/login/")} title="Reset Password" />
                    </div>

                </>


            );
            break;



        default:
            element = (
                <>
                    <p className="mb-3 fs-14 fw-400">
                        We have sent an OTP to 01*******66
                        Please enter it below
                    </p>

                    <div className="">
                        <Input placeholder="Type your number" label="Phone Number" />
                    </div>

                    <div className={"mt-4 bgPrimary-1 cWhite brPrimary-1 fw-500 fs-16 " + classes.customButton}>
                        <Button onClicked={() => setPage(1)} title="Send OTP" />
                    </div>

                </>
            );
    }
    return (
        <>
            {element}

        </>

    );
}

export default ResetPassword;