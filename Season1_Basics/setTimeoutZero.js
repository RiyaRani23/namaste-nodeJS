console.log("Hello world!");

var a = 123456;
var b = 654321;

// This will be executed after the main thread is free or This callback
// will be executed when the call stack is empty
setTimeout(() => {
    console.log("Call me after zero seconds");
}, 0);

setTimeout(() => {
    console.log("Call me after 3 seconds");
}, 3000);

function multiply(x, y) {
    const result = x * y;
    return result;
}

var c = multiply(a, b);
console.log("Multiplication is:", c);