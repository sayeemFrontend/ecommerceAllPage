export function newArry(pointer, slideToShow, length) {
    let startIndex = pointer
    let endIndex = pointer + slideToShow
    let array = []
    for (let i = startIndex; i < endIndex; i++) {
        array = [...array, i % length]
    }

    return array

}