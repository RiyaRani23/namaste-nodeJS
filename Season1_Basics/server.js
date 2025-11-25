const http = require("http");

// To create server
const server = http.createServer(function (req, res) {

    if (req.url === "/getSecretData"){
        res.end("There is no secret data");
    } else {
    res.end("Hello World");  // data send back to the user
    }
});

server.listen(3000);

// Express is a framework built on top of Node.js to make server creation and routing easier
// Above code is not used in production, only for learning purposes 
// In production, use frameworks like Express.js for better routing and middleware support