import { Link } from "react-router-dom";
import classes from "./CategoryList.module.css";
import { useState } from "react";
import SingleCategory from "./utils/SigleCategory";

const CategoryList = (props) => {
   const [expandedList, updateList] = useState([])
   const categoeis = [
      {
         id: 10, title: 'Fresh Fruits and vegetables', icon: "icon",
         category: [
            { id: 101, title: 'Item1', icon: "icon" },
            { id: 102, title: 'Item2', icon: "Icon" },
            { id: 103, title: 'Item3', icon: "Icon" },
         ]
      },
      {
         id: 20, title: 'Beverages', icon: "Icon",
         category: [
            { id: 201, title: 'Item21', icon: "Icon", category: [{ id: 1001, title: "sayy", icon: "hey" }], },
            { id: 202, title: 'Item222', icon: "Icon" },
            { id: 203, title: 'Item3222', icon: "Icon" },
         ]
      },
      {
         id: 30, title: 'Bakery & Snacks', icon: "Icon",
      },
      {
         id: 40, title: 'Bakery & Snacks two', icon: "Icon",
      },
   ]
   // const categoeis = [
   //    {
   //       id: 10, title: 'Fresh Fruits and vegetables', link: '/aaaa',
   //       subList: [
   //          { id: 101, title: 'Item1', link: '/aaaa/aaaa' },
   //          { id: 102, title: 'Item2', link: '/aaaa/aaaaa' },
   //          { id: 103, title: 'Item3', link: '/aaaa/aaaaaa' },
   //       ]
   //    },
   //    {
   //       id: 20, title: 'Beverages', link: '/aaaav',
   //       subList: [
   //          { id: 201, title: 'Item1', link: '/aaaav/aaaavv' },
   //          { id: 202, title: 'Item2', link: '/aaaav/aaaavvvvVVV' },
   //          { id: 203, title: 'Item3', link: '/aaaav/aaaavvvv' },
   //       ]
   //    },
   //    {
   //       id: 20, title: 'Bakery & Snacks', link: '/aaaav',
   //    },
   //    {
   //       id: 20, title: 'Bakery & Snacks', link: '/aaaav',
   //    },
   // ]

   const clickHandle = (id) => {
      if (expandedList.includes(id)) {
         let newList = expandedList.filter(it => it !== id)
         updateList(newList)
      }
      else {
         updateList([...expandedList, id])
      }
   }


   /*from here */



   return (

      <div className={props.show === true ? classes.listContainer : "d-none"}>
         {categoeis?.map((data) => (

            data.subList ? (
               <>
                  <div onClick={() => clickHandle(data.id)} className={classes.listItem}>
                     <div className="d-flex align-items-center flex-grow-1">
                        <span> <img src="" alt="" /></span>
                        <span className="mx-3">{data.title}</span>
                     </div>
                     <div className={expandedList.includes(data.id) && classes.rotate}><i class="fas fa-chevron-down"></i></div>
                  </div>
                  <div className={expandedList.includes(data.id) ? classes.subListContainer : "d-none"}>
                     {data.subList.map((sub) => (
                        <div className={classes.listItem}>
                           <span className="mx-4">{sub.title}</span>
                        </div>
                     ))}

                  </div>
               </>

            ) : (
               <Link to="">
                  <div className={classes.listItem}>
                     <div className="d-flex align-items-center flex-grow-1">
                        <span> <img src="" alt="" /></span>
                        <span className="mx-3">{data.title}</span>
                     </div>
                  </div>
               </Link>
            )
         ))}
      </div>


   );
}

export default CategoryList;