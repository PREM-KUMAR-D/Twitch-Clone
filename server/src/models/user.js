const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String ,
        required: true,
    },
    chanel:{
        type: mongoose.Schema.ObjectId, ref: "Chanel"
    },
    followedChanels: {
        type: [{
            type: mongoose.Schema.ObjectId, ref: "Chanel"
        }]
    }
})

const userModel = mongoose.model('User',userSchema);


module.exports = userModel;
