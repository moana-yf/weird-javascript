'use strict'

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myMap = function(callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
    }
    return arr;
};

Array.prototype.myFilter = function(callback, context) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback.call(context, this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
}

Array.prototype.myReduce = function(callback, initialVal) {
    const accumulator = (initialVal === undefined) ? undefined : initialVal;
    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        }else {
            accumulator = this[i];
        }
        return accumulator;
    }
}

