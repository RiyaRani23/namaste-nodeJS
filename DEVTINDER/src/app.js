const express = require("express");
const app = express();

app.use("/user",
    (req, res, next) => {
        console.log("Handling the router user!!");
        next();
    },
    (req, res, next) => {
        console.log("Handling the router user 2 !!");
        // res.send("2nd Response!");
        next();
    },
    (req, res, next) => {
        console.log("Handling the router user!!");
        res.send("Final Response!");
    },
)
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});