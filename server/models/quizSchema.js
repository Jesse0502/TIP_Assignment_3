const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
    taken_by: {
        type: String,
        required: true,
    },
    quiz_name: {
        type: String,
        required: true,
    },
    attempted: {
        type: Boolean,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
    score: {
        type: Number,
        required: false,
    },
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = { Quiz };