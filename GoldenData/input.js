function inputArray(array, number) {
    array.push(number);
    return array;
}

function deleteArray(array, index) {
    const a = array.splice(index, 1);
    return a;
}