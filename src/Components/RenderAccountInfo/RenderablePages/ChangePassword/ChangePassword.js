import Button from "../../../Button/Button";
import Input from "../../../Input/Input";
import classes from "./ChangePassword.module.css"

const ChangePassword = () => {

    return (
        <div className={classes.paymentHistory}>
            <p className=" mb-3 fs-30">Change Password</p>
            <div className="formContainer">
                <div className="mb-3">
                    <Input name="oldPassword" type="password" label="Old Password" placeholder="Type old password" />
                </div>
                <div className="mb-3">
                    <Input name="newPassword" type="password" label="New Password" placeholder="Type new password" />
                </div>
                <div className="mb-3">
                    <Input name="confirmPassword" type="password" label="Re-type Password" placeholder="Re-type password" />
                </div>
            </div>

            <div className="py-2 px-3 bgPrimary-1 cWhite brPrimary-1">
                <Button title="Change Password" />
            </div>
        </div>
    );

}

export default ChangePassword;