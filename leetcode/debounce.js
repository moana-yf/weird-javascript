// Implement debounce
// debouncedFn();
// debouncedFn();
// debouncedFn();
// debouncedFn();
// debouncedFn();

function debounce(fn, time) {
    let setTimeoutId;

    return function() {

        if (setTimeoutId) {
            clearTimeout(setTimeoutId);
        }

        setTimeoutId = setTimeout(() => {
            fn.apply(this, args);
            setTimeoutId = null
        }, time);
    }
}

// Implement throttle
function throttle(fn, time) {
    let setTimeoutId;

    return function() {

        if (setTimeoutId) {
            return;
        }

        setTimeoutId = setTimeout(() => {
            fn.apply(this, args);
            setTimeoutId = null;
        }, time);
    }
}

