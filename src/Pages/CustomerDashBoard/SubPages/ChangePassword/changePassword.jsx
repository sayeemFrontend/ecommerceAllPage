import Button from "../../../../Components/Button/button"
import Input from "../../../../Components/Input/input"
import Radio from "../../../../Components/Radio/radio"
import "./changePassword.css"

const ChangePassword = () => {
    return (
        <div className="changePassword">
            <div className="formContainer">
                <div className="inputField">
                    <Input type="password" label="Old Password" placeholder="Old Password" />
                </div>
                <div className="inputField">
                    <Input type="password" label="New Password" placeholder="New Password" />
                </div>
                <div className="inputField">
                    <Input type="passord" label="Confirm Password" placeholder="Confirm Password" />
                </div>

                <Button title="Password Reset" styles={{ height: "40px", fontSize: "14px" }} />
            </div>
        </div>
    );
}

export default ChangePassword;