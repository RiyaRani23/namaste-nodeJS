//  const { calculateSum, x } = require('./calculate/sum'); // CommonJS require statement
//  const { product } = require('./calculate/multiply');

const {calculateSum, product} = require('./calculate');

// ES6 import statement
// import { calculateSum, x } from './sum.js';

console.log("Sum is:", calculateSum(5, 10));
console.log("Product is:", product(5, 10));


