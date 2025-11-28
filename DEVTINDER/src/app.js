const express = require("express");
const app = express();


app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params); // Logs the route parameters
  res.send({firstName: "Riya", lastNmae:"Rani"}); 
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});