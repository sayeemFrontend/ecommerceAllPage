import { useState } from "react";
import Button from "../../../../Components/Button/button";
import "./shippingAddress.css"
const plusIcon = <i style={{ color: "green", fontSize: "14px" }} class="fas fa-plus-circle"></i>
const ShippingAddress = () => {
    const data = { id: 1, name: "Shekh Rinta", phone: "019237283729", house_no: "20", floor_no: "08", road_no: "20", post_code: "", city: "Dhaka North", text: "Nikunjo 2, khilkhet" }
    const [address, updateAddress] = useState([data])
    return (
        <div className="shippingAddress">
            <div className="addressContainer">
                {address?.map((addr) => (
                    <div className="address">
                        <p className="name">
                            {addr.name}
                        </p>
                        <p className="phone">{addr.phone}</p>
                        <p className="text">
                            Floor no {addr.floor_no}, House no #{addr.house_no} Road no #{addr.road_no} {addr.text} {addr.city}
                        </p>
                        <div className="edit">
                            <i class="far fa-edit"></i>
                        </div>

                    </div>

                ))}
                <div className="btnContainer">
                    <Button onClicked={() => updateAddress([...address, data])} title="Add New Address" icon={plusIcon} styles={{ height: "40px", backgroundColor: "white", color: "#4F4D4D" }} />
                </div>
            </div>

        </div>
    );
}

export default ShippingAddress;