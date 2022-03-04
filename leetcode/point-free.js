function not(fn) {
    return function negated(...args) {
        return !fn(...args);
    };
}

function isOdd(v) {
    return v % 2 === 1;
}

var isEven = not(isOdd);

isEven(4);    //true