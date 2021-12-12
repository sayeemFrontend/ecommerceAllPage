import * as actionTypes from "./actionType"

export function addItem(item) {
    return {
        type: actionTypes.ADD,
        payload: item
    }
}
export function deleteItem(item) {
    return {
        type: actionTypes.DELETE,
        payload: item
    }
}
export function updateItem(item) {
    return {

    }
}