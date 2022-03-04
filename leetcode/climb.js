function factorial(n) {
    if (n < 0) return;
    if (n < 2) return 1;
    return n * factorial(n-1);
}

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var solution = 0;
    for (let two = 0; two <= (n - (n % 2)) / 2; two++) {
        let one = n - 2 * two;
        console.log("1, 2", one, two, factorial(one + two) / factorial(Math.max(one, two)));
        solution += factorial(one + two) / factorial(one) / factorial(two);
        // if (two === 0) {
        //     console.log(two);
        //     console.log(1, (factorial(one + two)) / (factorial(one)));            
        //     solution += (factorial(one + two)) / (factorial(one));
        // }
        // else if (one === 0) {
        //     console.log((2, factorial(one + two)) / (factorial(two)))
        //     solution += (factorial(one + two)) / (factorial(two));
        // }else {
        //     console.log("1,2", one, two);
        //     console.log(3, (factorial(one + two)) / (factorial(one)));
        //     solution += (factorial(one + two)) / (factorial(one));   
        // }
    }
    return solution;
};


climbStairs(6);