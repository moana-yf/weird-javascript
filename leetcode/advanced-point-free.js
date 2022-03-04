// Equational reasoning is the heart of being able 
// to do point free style. 
// Ask yourself: if I have this function and I need 
// make that function, what kind of shape change needs to 
// occur so that they are interchangeable. 

function mod(y) {
    return function forX(x) {
        return x % y;
    };
}

function eq(y) {
    return function forX(x) {
        return x === y;
    };
}

function isOdd(x) {
    return eq1( mod2( x ) );
}

function compose(fn2, fn1) {
    return function composed(v) {
        return fn2( fn1( v ) );
    };
}

var mod2 = mod(2);
var eq1 = eq(1);
var isOdd = compose(eq1, mod2);
var isOdd = compose(eq(1), mod(2));