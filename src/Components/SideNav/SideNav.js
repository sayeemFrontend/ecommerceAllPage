import { Link } from "react-router-dom";
import classes from "./SideNav.module.css";
import sideIcon from "./../../Asset/singleCategoryIcon.png"
import { useState } from "react";

const SideNav = () => {
   const [expandedList, updateExpandedList] = useState([])
   const categories = [
      {
         id: 10, title: 'Fresh Fruits and vegetables', link: '/aaaa',
         subList: [
            { id: 101, title: 'Item1', link: '/aaaa/aaaa' },
            { id: 102, title: 'Item2', link: '/aaaa/aaaaa' },
            { id: 103, title: 'Item3', link: '/aaaa/aaaaaa' },
         ]
      },
      {
         id: 20, title: 'Beverages', link: '/aaaav',
         subList: [
            { id: 201, title: 'Item1', link: '/aaaav/aaaavv' },
            { id: 202, title: 'Item2', link: '/aaaav/aaaavvvvVVV' },
            { id: 203, title: 'Item3', link: '/aaaav/aaaavvvv' },
         ]
      },
      {
         id: 20, title: 'Bakery & Snacks', link: '/aaaav',
      },
      {
         id: 20, title: 'Bakery & Snacks', link: '/aaaav',
      },
   ]

   const expandListControl = (id) => {
      if (expandedList.includes(id)) {
         let newList = expandedList.filter(it => it !== id)
         updateExpandedList(newList)
      }
      else {
         updateExpandedList([...expandedList, id])
      }
   }

   return (
      <div className={classes.listContainer}>
         {categories?.map((data) => (

            data.subList ? (
               <>
                  <ul key={data.id} onClick={() => expandListControl(data.id)} className={classes.listItem}>
                     <li>
                        <img src={sideIcon} alt="" />
                     </li>
                     <li className="flex-grow-1"> {data.title}</li>
                     <li className={expandedList.includes(data.id) && classes.rotate}><i class="fas fa-chevron-down"></i></li>
                  </ul>
                  <div className={expandedList.includes(data.id) ? classes.subListContainer : "d-none"}>
                     {data.subList.map((sub) => (
                        <ul key={sub.id} className={classes.listItem}>
                           <Link to={"/category/" + sub.title}>
                              <li className="mx-1">{sub.title}</li>
                           </Link>
                        </ul>
                     ))}

                  </div>
               </>

            ) : (
               <ul key={data.id} className={classes.listItem}>
                  <Link className="d-flex align-items-center" to={"/category/" + data.title}>
                     <li className="flex-grow-1">
                        <img src={sideIcon} alt="" />
                     </li>
                     <li>{data.title}</li>
                  </Link>
               </ul>
            )
         ))}
      </div>
   );
}

export default SideNav;