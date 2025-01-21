const mongoose = require('mongoose');
const uuid = require('uuid');


const defaultTitle = "New Channel";
const defaultDecrisption = " This is a new channel";

const chanelSchema = new mongoose.Schema({
    isActive: {
        type: Boolean,
        default: false,

    },
    title: {
        type: String,
        default: defaultTitle
    },
    description: {
        type: String,
        default: defaultDecrisption
    },
    avatarUrl : {
        type: String,
        default: 'none'
    },
    streamKey: {
        type: String,
        default: uuid()
    },
    message:{
        type: [{
            type: mongoose.Schema.Types.ObjectId, ref: "Message"
        }],
        default: []
    }



})

const chanelModel = mongoose.model(chanelSchema,'Chanel');

module.exports = chanelModel;