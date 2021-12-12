import CountryInput from "../../../CountryInput/CountryInput";
import Input from "../../../Input/Input";
import classes from "./PersonalInfo.module.css"
import { useState } from 'react';
import SelectedInput from "../../../SelectedInput/selectedInput";
import Button from "../../../Button/Button";

const PersonalInfo = () => {
    const countryNameList = ["BAN", "IND", "JAP"]
    const [phoneNumber, setPhoneNumber] = useState()
    const [distric, setDistrict] = useState("select city")
    const [subDistric, setSubDistrict] = useState("select distric")
    const [townWard, setTownWard] = useState("select town/Ward")


    const districtList = ["Dhaka", "Mymensing"]
    const subDistrictList = ["Dhaka", "Mymensing"]
    const townWardList = ["Dhaka", "Mymensing"]

    return (
        <div className={classes.personalInfo}>
            <p className="fs-30">Personal Information</p>
            <div className="formContainer">
                <div className="mb-3">
                    <Input name="fullName" type="text" label="Full Name" placeholder="Type full name" />
                </div>

                <div className="row mb-3">
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <CountryInput setInputValue={setPhoneNumber} label="Phone Number" countryNameList={countryNameList} />
                    </div>
                    <div className="col-12 col-md-6  mb-3 mb-md-0">
                        <Input name="phoneNumber" type="email" label="Email Address" placeholder="Type email address" />
                    </div>
                </div>
                <div className="mb-3 py-2">
                    <SelectedInput top="top43" selFunc={(parm) => setDistrict(parm)} value={distric} label="District" options={districtList} />
                </div>
                <div className="row mb-3">
                    <div className="py-2 col-12 col-md-6 mb-3 mb-md-0">
                        <SelectedInput top="top43" selFunc={(parm) => setSubDistrict(parm)} value={subDistric} label="Sub-District" options={subDistrictList} />
                    </div>
                    <div className="py-2 col-12 col-md-6  mb-3 mb-md-0">
                        <SelectedInput top="top43" selFunc={(parm) => setTownWard(parm)} value={townWard} label="Town / Ward " options={townWardList} />
                    </div>
                </div>

                <div className="mb-3">
                    <Input name="address" type="text" label="Address" placeholder="Ex: ABC Building, 1890 NY" />
                </div>

            </div>
            <div className={"fs-16 fw-500 bgPrimary-1 cWhite py-3 px-2 brPrimary-1 " + classes.buttonWidth}>
                <Button title="Save Information" />
            </div>
        </div>
    );
}

export default PersonalInfo;