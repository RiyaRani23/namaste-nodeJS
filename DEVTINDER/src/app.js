const express = require("express");
const app = express();

// This route handles GET requests to /user
app.get("/user", (req, res) => {
  res.send({firstName: "Riya", lastNmae:"Rani"}); 
});

app.post("/user", (req, res) => {
    // Saving data to the database 
  res.send(" Data successfully saved to the database! "); 
});

app.delete("/user", (req, res) => {
    // Deleting data from the database 
  res.send(" Data successfully deleted ");
});

app.use("/test",(req, res) => {
    res.send(" Test " ); 
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});