import * as actionTypes from "./actionType"

const CardReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return [
                ...state,
                action.payload
            ]

        case actionTypes.UPDATE:
            return [

            ]
        case actionTypes.DELETE:
            return state.filter(it => it !== action.payload)
        default:
            return state
    }

}

export default CardReducer;