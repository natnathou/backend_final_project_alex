const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    yearPremiered: {
        type: Date,
        required: true,
    },
    genres: {
        type: Array,
        required: true,
        default: [],
    },
    imageUrl: {
        type: String,
        required: true,
    },
}, {
    versionKey: false
});
const Movie = mongoose.model('Movie', schema);


module.exports = Movie;
