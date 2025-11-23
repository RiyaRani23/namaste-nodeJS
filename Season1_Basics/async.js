const fs = require("fs");
const https = require("https");

// 1 
console.log("Hello world!");

var a = 123456;
var b = 654321;

fs.readFileSync("./file.txt", "utf-8");
console.log("File is read synchronously");

// 4
https.get("https://www.google.com", (res) => {
    console.log("Got response from Google");
});

// 5 
setTimeout(() => {
    console.log("Call me after 5 seconds");
}, 5000);


// 3
// Async Function
fs.readFile("./file.txt", "utf-8", (err, data) => {
        console.log("File data is:", data);
    });

// 2
function multiply(x, y) {
    const result = x * y;
    return result;
}

var c = multiply(a, b);
console.log("Multiplication is:", c);