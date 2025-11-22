console.log("Sum module loaded");

var x = "Hello from sum.js";

function calculateSum(a , b) {
    const sum = a + b;
    return sum;
}

module.exports = {
    calculateSum: calculateSum,
    x: x
}; 