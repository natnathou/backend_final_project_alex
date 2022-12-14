const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 2
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    token: {
        type: String,
        required: false,
    }
}, {
    versionKey: false
});
const User = mongoose.model('User', schema);


module.exports = User;
