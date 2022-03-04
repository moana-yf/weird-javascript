function transposeArray(arr, len) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push([]);
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < len; j++) {
            newArr[j].push(arr[i][j]);
        }
    }

    return newArr;
}