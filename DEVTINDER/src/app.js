const express = require("express");

const app = express();

const { adminAuth, userAuth} = require("./middlewares/auth.js");

app.use("/admin",adminAuth);

app.post("/user/login", (req, res) => {
  res.send("User logged in successfully");
});

app.get({"/user/data": userAuth}, (req, res) => {
  res.send("User data sent");
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All Data Sent");
});

app.arguments("/admin/deleteUser", adminAuth, (req, res) => {
  res.send("User deleted");
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});