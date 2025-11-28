const express = require("express");
const app = express();

app.use("/hello", (req, res) => {
    res.send("Hello, Hello , Namaste!" ); 
})

app.use("/test",(req, res) => {
    res.send(" Test " ); 
})

// Default route , when no other route matches .
// Order of the routes matter a lot.  
app.use("/",(req, res) => {
    res.send("Hello, DevTinder!" ); 
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});