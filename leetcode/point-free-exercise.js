/*

Point-Free

1. Refactor the `output(..)`, `printIf(..)`, and `isLongEnough(..)`
functions to use point-free style. 

2. Hints:
    - Some browsers require `console.log(..)` to run against the 
    `console` context, so `f = console.log; f(..)` fails because of 
    lost `this` binding. 

    Use `.bind(..)` to be safe.

    - `printIf(..)` can be expressed in terms of a `when(..)` that 
    looks like: 

    ```js
    function when(fn) {
        return function(predicate) {
            return function(...args) {
                if (predicate(...args)) {
                    return fn(...args);
                }
            };
        };
    }
    ```

    -`isLongEnough(..)` is the negatino of `isShortEnough`. 

*/

"use strict";

var output = console.log.bind(console);

// function printIf(shouldPrintIt) {
//     return function(msg) {
//         if (shouldPrintIt(msg)) {
//             output(msg);
//         }
//     };
// }

function when(fn) {
    return function(predicate) {
        return function(arg) {
            if (predicate(arg)) {
                return fn(arg);
            }
        };
    };
}

when(output)(isShortEnough)(msg1);
// printIf  (isShortEnough)(msg1);

var printIf = when(output);

function not(fn) {
    return function negated(...args) {
        return !fn(...args);
    };
}

function isShortEnough(str) {
    return str.length <= 5;
}

var isLongEnough = not(isShortEnough);

let msg1 = "Hello";
let msg2 = `${msg1} World`;

printIf(isShortEnough)(msg1);       // Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);        // Hello World





