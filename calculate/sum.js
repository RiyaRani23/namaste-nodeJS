console.log("Sum module loaded");

export var x = "Hello from sum.js";

// Exporting using ES6 module syntax
export function calculateSum(a , b) {
    const sum = a + b;
    return sum;
}

// Exporting using CommonJS syntax
// module.exports = { calculateSum, x }; 