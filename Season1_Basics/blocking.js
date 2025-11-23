const crypto = require('node:crypto');

console.log("Hello world!");

var a = 123456;
var b = 654321;

// Password-based key derivation function
crypto.pbkdf2Sync("password", "salt", 500000, 64, "sha512");
console.log("Synchronous key is generated:");

// Async Function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, Key) => {
    console.log("Key is generated:");
});

function multiply(x, y) {
    const result = x * y;
    return result;
}

var c = multiply(a, b);
console.log("Multiplication is:", c);