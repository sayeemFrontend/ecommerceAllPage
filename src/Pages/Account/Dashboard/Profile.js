import { useState } from "react"
import classes from "./Profile.module.css"
import ListItems from "../../../Components/ListItems/ListItems"
import RenderAccountInfo from "../../../Components/RenderAccountInfo/RenderAccountInfo"

const Profile = () => {
   const itemList = [
      { id: 1, title: "Personal Information", }, { id: 2, title: "Payment History" },
      { id: 3, title: "Change Password" }, { id: 4, title: "My Orders" },
   ]
   const [activeItem, setActiveItem] = useState(itemList[0])
   const [modal, setModal] = useState(false)


   const handleClicked = (param) => {
      setActiveItem(param)
      setModal(!modal)
   }

   return (
      <div className={"mt-5 " + classes.profilePage}>
         <p className=" mb-3 fw-600 fs-28">My Dashboard</p>
         <div className="row">
            <div className="col-12 col-md-3">
               {/* mobile */}
               <div onClick={() => setModal(!modal)} className={"d-flex d-md-none " + classes.valueField}>
                  {activeItem.title}  <span><i className='fas fa-chevron-down'></i></span>
               </div>
               {/* tab */}
               <div className={"d-none d-md-block " + classes.sidebarListContainer}>
                  <ListItems activeItem={activeItem} onClicked={(para) => setActiveItem(para)} list={itemList} />
               </div>
               <div className={modal ? "d-block d-md-none" : "d-none"}>
                  <div className={classes.sidebarListContainer}>
                     <ListItems activeItem={activeItem} onClicked={handleClicked} list={itemList} />
                  </div>
               </div>
            </div>
            <div className="mt-4 mt-md-0 col-12 col-md-9">
               <RenderAccountInfo activeId={activeItem} />
            </div>
         </div>

      </div>
   );
}

export default Profile;