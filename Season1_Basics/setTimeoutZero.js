console.log("Hello world!");

var a = 123456;
var b = 654321;

setTimeout(() => {
    console.log("Call me after 3 seconds");
}, 3000);

function multiply(x, y) {
    const result = x * y;
    return result;
}

var c = multiply(a, b);
console.log("Multiplication is:", c);