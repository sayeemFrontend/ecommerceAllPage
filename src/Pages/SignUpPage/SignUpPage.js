import Button from "../../Components/Button/Button";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import classes from "./SignUpPage.module.css"


const SignUpPage = () => {
    return (
        <div className={classes.signUpPage}>
            <p className="mb-4 ps-md-4 ms-md-2 fs-20 fw-500 ">Create An Account</p>
            <SignUpForm />
        </div>
    );
}
export default SignUpPage