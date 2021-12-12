
import React from "react"
import classes from "./Home.module.css"
import { useHistory } from "react-router";
import Cart from '../../Components/SingleCart/Cart';
import Categories from "../../Components/Categories/Categories";
import PopularBrand from '../../Components/PopularBrand/PopularBrand';
import OfferCategory from '../../Components/OfferCategory/OfferCategory';
import SliderTwo from './../../Components/CustomSlider/sliderTwo';
import DisplayItems from "../../Components/DisplayItems/DisplayItems";
import categoryIcon from "./../../Asset/allcategory.jpg"
import AllCategoryView from "./../../Components/AllCategoryView/View"
import latestCategoryCart from "./../../Components/SingleCart/Cart01/Cart01"
import DisplayItemsByRow from './../../Components/DisplayItemsByRow/DisplayItemsByRow';
import comboOfferCart from "./../../Components/SingleCart/Cart02/Cart02"
import categoryCart03 from "./../../Components/SingleCart/Cart03/Cart03"
import SimpleSlider from "../../Components/ReactSlick/slider";

const HomePage = () => {
   const allCategoryitems = [
      {
         id: 1, image: categoryIcon, title: "Grocery", type: "",
      },
      {
         id: 2, image: categoryIcon, title: "Oil & Spicy", type: "",
      },
      {
         id: 3, image: categoryIcon, title: "Fruit & Vegetable", type: "",
      },
      {
         id: 4, image: categoryIcon, title: "Grocery", type: "",
      },
      {
         id: 5, image: categoryIcon, title: "Oil & Spicy", type: "",
      },
      {
         id: 6, image: categoryIcon, title: "Gift & Toys", type: "",
      }
   ]
   const latestItem = [
      {
         id: 1,
         title: "Red & Yellow Capsicum (Net Weight ± 20 gm)",
         newPrice: 180,
         oldPrice: 210,
         quantity: ["200 gm", "500 gm", " 700 gm", " 1 kg"]
      },
      {
         id: 2,
         title: "Red & Yellow Capsicum (Net Weight ± 20 gm)",
         newPrice: 180,
         oldPrice: 210,
         quantity: ["200 gm", "500 gm", " 700 gm", " 1 kg"]
      },
      {
         id: 3,
         title: "Red & Yellow Capsicum (Net Weight ± 20 gm)",
         newPrice: 180,
         oldPrice: 210,
         quantity: ["200 gm", "500 gm", " 700 gm", " 1 kg"]
      },
      {
         id: 4,
         title: "Red & Yellow Capsicum (Net Weight ± 20 gm)",
         newPrice: 180,
         oldPrice: 210,
         quantity: ["200 gm", "500 gm", " 700 gm", " 1 kg"]
      },
      {
         id: 5,
         title: "Red & Yellow Capsicum (Net Weight ± 20 gm)",
         newPrice: 180,
         oldPrice: 210,
         quantity: ["200 gm", "500 gm", " 700 gm", " 1 kg"]
      },
      {
         id: 6,
         title: "Red & Yellow Capsicum (Net Weight ± 20 gm)",
         newPrice: 180,
         oldPrice: 210,
         quantity: ["200 gm", "500 gm", " 700 gm", " 1 kg"]
      },
      {
         id: 7,
         title: "Red & Yellow Capsicum (Net Weight ± 20 gm)",
         newPrice: 180,
         oldPrice: 210,
         quantity: ["200 gm", "500 gm", " 700 gm", " 1 kg"]
      }
   ]
   const history = useHistory()
   return (
      <div className={classes.homePage}>
         <div className={classes.slideContainer}>
            {/* <SliderTwo /> */}
            <SimpleSlider />
         </div>
         <div className="container-fluid">
            <div>
               <h4 className="my-4">All Products Category</h4>
               <DisplayItems itemsList={allCategoryitems} View={AllCategoryView} />
            </div>

            <div>
               <h4 className="my-4">Latest Products</h4>
               <DisplayItemsByRow itemsList={latestItem} View={latestCategoryCart} />
            </div>

            <div>
               <h4 className="my-4">Combo Offer</h4>
               <DisplayItemsByRow itemsList={latestItem} View={comboOfferCart} />
            </div>

            <div>
               <h4 className="my-4">Meat & Fish</h4>
               <DisplayItemsByRow itemsList={latestItem} View={latestCategoryCart} />
            </div>

            <div>
               <h4 className="my-4">Dairy & Eggs</h4>
               <DisplayItemsByRow itemsList={latestItem} View={categoryCart03} />
            </div>

         </div>

      </div>

   );
}

export default HomePage;