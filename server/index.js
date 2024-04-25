const express = require("express");
const cors = require("cors")

const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const { User } = require("./models/userSchema");

app.use(cors())

const uri = "mongodb+srv://105078507:Uc2W5BQFRk0Lcb8L@cluster0.kl66lp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/quiz-app";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", async (req, res) => {
  console.log(req.body)
  try {

    const userExist = (await User.findOne({ username: req.body.username }))
    if (userExist) {
      res.status(200).json({ msg: "", userInfo: userExist.toJSON() })

    } else {
      res.status(200).json({ msg: "user not found", userInfo: null })

    }
  } catch (err) {
    res.status(500).json({ err })
    console.log(err)
  }
})

app.post("/register", async (req, res) => {
  try {

    const newUser = new User({ username: req.body.username, fullname: req.body.fullname, age: req.body.age, password: req.body.password })
    await newUser.save()
    console.log(req.body)
    res.status(200).json(req.body)
  } catch (err) {
    res.status(500).json(err.message)

  }
})


const start = async () => {
  try {
    await mongoose.connect(
      uri
    );
    app.listen(port, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
