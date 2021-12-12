import Button from "../../../../Components/Button/button"
import Input from "../../../../Components/Input/input"
import Radio from "../../../../Components/Radio/radio"
import "./editAccount.css"
const EditAccount = () => {
    return (
        <div className="editAccount">
            <div className="formContainer">
                <div className="inputField">
                    <Input type="text" label="Full Name" placeholder="Type Your Name" />
                </div>
                <div className="inputField">
                    <Input type="date" label="Date Of Birth" placeholder="" />
                </div>
                <div className="inputField">
                    <Input type="text" label="Phone Number" placeholder="Type Your Phone Number" />
                </div>
                <div className="inputField">
                    <Input type="email" label="Email Address" placeholder="Type Your Email Address" />
                </div>
                <div className="inputField d-flex">
                    <Radio styles={{ marginRight: "100px" }} type="radio" label="male" name="gender" />
                    <Radio type="radio" label="female" name="gender" />
                </div>
                <Button title="Save" styles={{ width: "95px", height: "40px", fontSize: "14px" }} />
            </div>
        </div>
    );
}

export default EditAccount;