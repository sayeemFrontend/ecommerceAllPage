import classes from "./View.module.css"

const View = ({ item }) => {
    return (
        <div className="p-3">
            <div className={classes.itemContainer}>

                <img src={item.image} alt="item" />
                <h6>
                    {item.title}
                </h6>
            </div>
        </div>
    );
}

export default View;