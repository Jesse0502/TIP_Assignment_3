const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { User } = require("./models/userSchema");
const { Quiz } = require("./models/quizSchema");

app.use(cors());

const uri =
  "mongodb+srv://105078507:Uc2W5BQFRk0Lcb8L@cluster0.kl66lp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/quiz-app";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  try {
    const userExist = await User.findOne({ username: req.body.username });
    if (userExist) {
      res.status(200).json({ msg: "", userInfo: userExist });
    } else {
      res.status(200).json({ msg: "user not found", userInfo: null });
    }
  } catch (err) {
    res.status(500).json({ err });
    console.log(err);
  }
});

app.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      fullname: req.body.fullname,
      password: req.body.password,
      totalPoints: 0,
    });
    await newUser.save();
    console.log(req.body);
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.post("/user-info", async (req, res) => {
  try {
    const getUser = await User.findOne({ username: req.body.username });
    if (getUser) {
      const getQuizzes = await Quiz.find({ taken_by: getUser.username });
      const getLeaderBoard = await User.find({}).sort({ totalPoints: 1 });
      console.log("user found", getQuizzes);
      res.status(200).json({
        msg: "user found",
        userInfo: getUser,
        quizzes: getQuizzes,
        leaderboard: getLeaderBoard,
      });
    } else res.status(401).json({ msg: "No user found!" });
  } catch (Err) {
    res.status(500).json({ msg: Err.message });
  }
});

app.post("/submit-quiz", async (req, res) => {
  try {
    const { username, score, quiz_name } = req.body;

    const quizGivenAlready = await Quiz.findOne({
      quiz_name,
      taken_by: username,
    });
    const currentUser = await User.findOne({ username });
    if (quizGivenAlready) {
      const quizUpdated = (
        await Quiz.updateOne({ quiz_name, taken_by: username }, { score })
      ).acknowledged;
      const changeScore = Math.max(
        currentUser.totalPoints - quizGivenAlready.score + score,
        0
      );
      const userUpdated = (
        await User.updateOne({ username }, { totalPoints: changeScore })
      ).acknowledged;
      console.log("userUpdated", userUpdated);
      const allQuiz = await Quiz.find({ taken_by: username });
      res.status(200).json({ msg: "Score Updated", data: allQuiz });
    } else {
      await new Quiz({
        quiz_name,
        score,
        taken_by: username,
        attempted: true,
        completed: true,
      }).save();
      await User.updateOne(
        { username },
        { totalPoints: currentUser.totalPoints + score }
      );
      const allQuiz = await Quiz.find({ taken_by: username });
      res.status(200).json({ msg: "Score Added", data: allQuiz });
    }
  } catch (err) {
    res.status(500).json({ msg: "Something went wrong" });
  }
});

const start = async () => {
  try {
    await mongoose.connect(uri);
    app.listen(port, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
