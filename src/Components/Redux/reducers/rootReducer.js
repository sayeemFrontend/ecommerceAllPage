import { combineReducers } from "redux"
import CardReducer from "./Card/cardReducer";
import CardReducerTwo from "./CardTwo/cardReducer";
import reducer from "./Counter/counterReducer"

const RootReducer = () => {
    return combineReducers({
        card: CardReducer,
        cardTwo: CardReducerTwo
    })

}

export default RootReducer;