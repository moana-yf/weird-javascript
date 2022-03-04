// [4, 3, 2, 1]
// [2] [4,3]
// [2,1], [3,4]
// [1, 2, 3, 4]

function quickSort(arr) {
    const len = arr.length;

    if (len < 2) return arr;

    const left = [];
    const right = [];

    const index = Math.floor(len);
    const pivot = arr.splice(index, 1)[0];
    
    for (let i = 0; i < len; i++) {
        if (arr[i] > pivot) right.push(arr[i]);
        if (arr[i] <= pivot) left.push(arr[i]);
    }

    return quickSort(left).concat([pivot], quickSort(right));
}
