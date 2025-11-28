const express = require("express");
const app = express();

// This route handles GET requests to /user
app.get(/fly*/, (req, res) => {
  res.send({firstName: "Riya", lastNmae:"Rani"}); 
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});