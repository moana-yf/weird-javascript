const prompt = require("prompt-sync")();

function not(fn) {
    return function negated(...args) {
        return !fn(...args);
    };
}

function isOdd(v) {
    return v % 2 == 1;
}

var isEven = not(isOdd);

function printMatrix(row, column) {
    let line = [];

    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= column; j++) {
            if (isOdd(j)) {
                line.push(i + (j-1) * row);
            }
            if (isEven(j)) {
                line.push(row * j - i + 1);
            }
            if (j === column) {
                console.log(...line);
                line = [];
            }
        }
    }
}

const row = parseInt(prompt("number of rows: "));
const column = parseInt(prompt("number of columns: "));

printMatrix(row, column);