import express from "express";
import mongoose from "mongoose";
import User from "./models/userModel.js";
import cors from "cors";

const app = express();
const port = 3000;

// CORS options
const corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://shuklaraghvendra76:jggVoYdzdp3590dC@cluster0.tob8i.mongodb.net/FirstProjectDatabase?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB Atlas");
});

// Endpoint to fetch all users

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ status: "Error in fetching data", message: error });
  }
});

// user login

app.post("/api/login", async (req, res) => {
  const body = req.body;
  const user = await User.find(body);
  res.json(user);
});

// creating new user
app.post("/api/register", (req, res) => {
  const body = req.body;
  console.log(body);

  (async function () {
    try {
      await User.create(body);
      res.json({ status: "User created successfully" });
    } catch (error) {
      res.json({
        status: "USER NOT CREATED",
        Error: "username is already present, please try with another username.",
      });
    }
  })();
});

app.listen(port, () => {
  console.log(`Server is listening at port: ${port}`);
});
