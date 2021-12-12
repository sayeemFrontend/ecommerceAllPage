import * as actionTypes from "./actionType"
const intState = {
    count: 5
}
export default function reducer(state = [], action) {
    switch (action.type) {
        case "add":
            return [
                ...state, 2
            ]

        default:
            return state
    }

}

