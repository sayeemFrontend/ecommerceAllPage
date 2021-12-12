import classes from "./LoginForm.module.css"
import Input from "../Input/Input"
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import { Link } from 'react-router-dom';

// validation will be this componenet

const LoginForm = () => {
    const inputIcon = <i className="far fa-eye fa-xs cGray-4"></i>
    return (
        <div className={classes.formContainer}>
            <div className="mb-3">
                <Input type="text" placeholder="Type your number" label="Phone Number" />
            </div>

            <div className="mb-3">
                <Input border="error" type="password" placeholder="Type your password" label="Password" icon={inputIcon} />
            </div>

            <div className="mb-3 ">
                <Checkbox label="Remember me" />
            </div>
            <div className="d-flex align-items-center">
                <div className="py-2 px-5 bgPrimary-1 cWhite fs-14 brPrimary-1">
                    <Button title="Login" />
                </div>
                <Link className="ps-2 ps-md-4 text-decoration-none fs-14 fw-500" to="/forget/password/" >Forgot Password</Link>
            </div>

        </div>
    );
}

export default LoginForm;