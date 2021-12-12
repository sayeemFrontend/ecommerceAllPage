import classes from "./ProductCategory.module.css"
import vegetable from "./../../../Asset/vegetable.png"
import { useHistory } from "react-router";
function ProductCategory() {
  const history=useHistory()
    return (
        <div onClick={()=>history.push("/product/all/")} className={classes.category}>
          <img src={vegetable} alt="vegetable"/>
          <h1>Fresh Fruits & Vegetable</h1>
        </div>
      );
}
export default ProductCategory