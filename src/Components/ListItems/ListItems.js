import classes from "./ListItems.module.css"

const ListItems = (props) => {
    return (
        <div className={classes.listContainer}>
            {props.list?.map((item) => (
                <div onClick={() => props.onClicked(item)} className={classes.listItem + " " + (props.activeItem.id === item.id && classes.active)}>
                    <span className="ms-2"> {item.title}</span>
                </div>
            ))}

        </div>
    );
}

export default ListItems