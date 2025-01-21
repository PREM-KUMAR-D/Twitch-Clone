const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    author:{
        type: String,
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const messageModel = mongoose.model(messageSchema,'Message');
module.exports = messageModel;