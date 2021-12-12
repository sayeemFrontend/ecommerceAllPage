import classes from "./DisplayItemsByRow.module.css"
import demoPic from "./asset/olive-oil.jpg"

const DisplayItemsByRow = ({ itemsList, View }) => {
    // const itemsList = [
    //     {
    //         id: 1, image: demoPic, title: "Grocery", type: "",
    //     },
    //     {
    //         id: 2, image: demoPic, title: "Oil & Spicy", type: "",
    //     },
    //     {
    //         id: 3, image: demoPic, title: "Fruit & Vegetable", type: "",
    //     },
    //     {
    //         id: 4, image: demoPic, title: "Grocery", type: "",
    //     },
    //     {
    //         id: 5, image: demoPic, title: "Oil & Spicy", type: "",
    //     },
    //     {
    //         id: 6, image: demoPic, title: "Gift & Toys", type: "",
    //     }
    // ]

    return (
        <div className={classes.itemsContainer}>
            <div className="row">

                {
                    itemsList?.map((item) => (
                        <div key={item.id} className="col-6 col-md-3" >
                            <View item={item} />
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default DisplayItemsByRow;