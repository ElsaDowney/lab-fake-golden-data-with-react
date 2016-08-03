function inputArray(array, number) {
    array.push(number);
    return array;
}

function deleteArray(array, index) {
    array.splice(index, 1);
    return array;   
}
//
// function Change(array) {
//     let flag = array[0];
//     return !flag;
// }