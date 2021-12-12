import classes from "./SignUpForm.module.css"
import Input from "../Input/Input"
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import { Link } from 'react-router-dom';

// validation will be this componenet

const SignUpForm = () => {
    const inputIcon = <i className="far fa-eye fa-xs cGray-4"></i>
    const label = <p></p>

    return (
        <div className={classes.formContainer}>
            <div className="row">
                <div className="col-12 col-md-6 px-md-5 ">
                    <p className="mb-2 fs-18 fw-400">Personal Information</p>
                    <div className="mb-3">
                        <Input type="text" placeholder="Type your first name" label="First Name" />
                    </div>
                    <div className="mb-3">
                        <Input border="ok" type="password" placeholder="Type your last name" label="Last Name" />
                    </div>
                </div>
                <div className="col-12 col-md-6 px-md-5 ">
                    <p className="mb-2 fs-18 fw-400">Sign in information</p>
                    <div className="mb-3">
                        <Input border="error" type="text" placeholder="Type your phone number" label="Phone Number" />
                    </div>
                    <div className="mb-3">
                        <Input type="password" placeholder="Type your password" label="Password" icon={inputIcon} />
                    </div>
                    <div className="mb-3">
                        <Input type="password" placeholder="Type your password" label="Re-enter Password" icon={inputIcon} />
                    </div>
                    <div className="mb-3">
                        <Checkbox label="By using this form you agree with the storage and handling of your data by this website." />
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="py-2 px-4 cWhite bgPrimary-1 ite fs-14 brPrimary-1">
                            <Button title="Sign up" />
                        </div>
                        <Link className="ps-5 text-decoration-none fs-14 fw-500" to="/account/login/" >Login</Link>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default SignUpForm;