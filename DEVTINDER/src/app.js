const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  // Creating a new instance of User model
   const user = new User( {
    firstName: "Aarav",
    lastName: "Kumar",
    emailId: "aarav@234.com",
    password: "aarav123",
    
   });

   try{
       await user.save();
       res.send("User added Successfully");
   }
   catch(err){
       res.status(400).send("Error creating user:" + err.message);
   }
  
})
connectDB()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(3000, () => {
        console.log("Server is running on port 3000");
       });
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });
