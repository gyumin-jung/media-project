const { Timestamp } = require('bson');
const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    favorites: {
        type: Number,
    }
},
    {
        timestamps: true
    }
);
module.exports = mongoose.model('User',userSchema);


