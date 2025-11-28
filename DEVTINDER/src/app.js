const express = require("express");
const app = express();

// Dynamic Route Parameters means we can define variables in the route path
// Example: /user/:userId/:name/:password 
// This is useful for creating routes that can handle different inputs without defining
//  separate routes for each possible value.
app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params); // Logs the route parameters
  res.send({firstName: "Riya", lastNmae:"Rani"}); 
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});