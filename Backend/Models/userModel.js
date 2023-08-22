const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 40
    },
    gender: {
        type: String,
        required: true,
    },
    phoneNumber:{
        type: Number,
        required: true
    }
    
})

const User = mongoose.model("User", userSchema);
module.exports = User