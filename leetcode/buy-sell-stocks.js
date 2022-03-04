// Say you have an array for which the ith element is the price of a 
// given stoc on day i
// 
// If you were only permitted to complete at most on transaction 
// (i.e., buy one ans sell one share of the stock),
// design an algorithm to find the maximum profit. 

const inp = [7, 1, 5, 3, 6, 4];
const oup = 5;
console.log(maxProfit(inp));

// 1. return the arr of lowest
// 2. calculate profit for each ele
// 3. loop again to compare profits
function maxProfit(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let lowest = Math.min(...arr);    
    let profits = [];
    arr.forEach(ele => {
        profits.push(ele - lowest)
    });
    profits.shift();
    return Math.max(...profits);
}

// O(1) space complexity
function buySell(prices) {
    let low = Number.MAX_SAFE_INTEGER;
    let bestProfit = 0;
    for (let price of prices) {
        const profit = price - low;
        if (profit < low) low = price;
        if (profit > bestProfit) bestProfit = profit;
    }
    return bestProfit;
}

