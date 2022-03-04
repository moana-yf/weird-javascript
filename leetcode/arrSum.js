// Object.keys()


function arrSum(arr, target) {

    const len = arr.length;

    const obj = {};

    for (let i = 0; i < len; i++) {
        obj[i] = arr[i];
    }

    for (let ele in obj) {
        if (ele && Object.keys(target - ele, obj)) {
            return [Object.keys(ele, obj), Object.keys(target - ele, obj)];
        }
        return null;
    }
}