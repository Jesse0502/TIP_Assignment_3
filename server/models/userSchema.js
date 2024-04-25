const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    totalPoints: {
        type: Number,
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };