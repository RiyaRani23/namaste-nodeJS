const express = require("express");
const app = express();

app.use("home",(req, res) => {
    res.send("Hello, DevTinder!" ); 
})

app.use("/hello", (req, res) => {
    res.send("Hello, Hello , Namaste!" ); 
})

app.use("/test",(req, res) => {
    res.send("Hello, Test " ); 
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});