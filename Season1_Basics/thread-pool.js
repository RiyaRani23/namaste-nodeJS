const fs = require("fs");
const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
    console.log("PBKDF2 1 completed");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
    console.log("PBKDF2 2 completed");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
    console.log("PBKDF2 3 completed");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", () => {
    console.log("PBKDF2 4 completed");
});