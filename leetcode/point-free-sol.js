function when(fn) {
    return function (predicate) {
        return function (arg) {
            if (predicate(arg)) {
                return fn(arg);
            }
        };
    };
}

function not(fn) {
    return function negated(...args) {
        return !fn(...args);
    };
}

var output = console.log.bind;

var printIf = when(output);

function isShortEnough(str) { 
    return str.length <= 5; 
}

var isLongEnough = not(isShortEnough);