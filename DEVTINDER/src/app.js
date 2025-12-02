const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  
   try{
       await user.save();
       res.send("User added Successfully");
   }
   catch(err){
       res.status(400).send("Error creating user:" + err.message);
   }
  
});

// Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    if (user.length === 0)  {
       res.status(404).send("User not found");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});

app.get("/feed", async (req, res) => {
  const user = await User.find({});
  res.send(user);
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId; 
  try{
    const user = await User.findByIdAndDelete(userId); // 
    res.send("User deleted Successfully");
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }

});

app.patch("/user", async (req, res) => {
  const userId = req.body.userId;
  const data = req.body; 
  try{
     await User.findByIdAndUpdate({_id: userId}, data);
     res.send("User updated Successfully");
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});

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
