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
app.get("/user/:emailId", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.find({ emailId: userEmail });
    if (useSyncExternalStore.length === 0)  {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send("Something went wrong ");
  }
});

app.get("/feed", (req, res) => {});

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
