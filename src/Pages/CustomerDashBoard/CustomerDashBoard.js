import { useState } from "react"
import DashProfile from "../../Components/MobileDash/DashProfile/DashProfile"
import DashDropMenu from "../../Components/MobileDash/DashDropMenu/DashDropMenu"
import customerImg from "./Asset/customer.png"
import classes from "./customerDashBoard.module.css"
import RenderPage from "./SubPages/RenderPage"

const CustomerDashBoard = () => {
   const [activeItem, setActiveItem] = useState(1)
   const customer = {
      id: 1,
      img: customerImg,
      name: " Mariya Klakar",
      join: "Member Since 2021"
   }

   const lists = [
      { id: 1, title: "Edit Account", }, { id: 2, title: "Change Pasword" },
      { id: 3, title: "Shipping Address" }, { id: 4, title: "Order List" },
      { id: 5, title: "Payment Status" }, { id: 6, title: "Logout" }
   ]

   return (
      <div className={classes.customerDashBoard}>

         <div className="container-fluid">
            <div className={classes.dashboardContainer}>
               <div className={classes.dashboardSidebar}>
                  <div className={classes.MobileDash}>
                     <DashProfile />
                  </div>

                  <div className={classes.DesktopDash}>
                     <div className={classes.profileContainer}>
                        <div className={classes.imgWrapper}>
                           <img src={customer.img} alt="" />
                           <p className={classes.title}>
                              {customer.name}
                           </p>
                           <p className={classes.subTitle}>
                              {customer.join}
                           </p>
                        </div>
                     </div>
                     <div className={classes.listContainer}>
                        {lists?.map((item) => (
                           <div
                              onClick={() => setActiveItem(item.id)}
                              className={item.id === activeItem ? classes.listItem + ' ' + classes.active : classes.listItem} >
                              <li>{item.title}</li>
                           </div>
                        ))}

                     </div>
                  </div>

               </div>
               <div className={classes.MobileDropMenu + " mt-3"}>
                  <DashDropMenu activeItem={activeItem} setActiveItem={setActiveItem} lists={lists} />
               </div>

               <div className={classes.dashboardContent}>
                  <RenderPage id={activeItem} />
               </div>
            </div>

         </div>
      </div >
   );
}

export default CustomerDashBoard;