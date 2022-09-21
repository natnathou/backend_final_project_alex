const Movie = require('../models/movie.model');

const findAllMovie = () => {
    return Movie.find({});
}

const findOneByName = (name) => {
    return Movie.findOne({name})
}

const findOneMovieById = async (id) => {
    return  Movie.findOne({id});
}

const createMovie = (data) => {
    const movie = new Movie(data);
    return movie.save();
}

const deleteMovie = (id) => {
    return Movie.findOneAndDelete({id})
}

const updateOneMovieById = (id, data) => {
    return Movie.findOneAndUpdate({id}, { ...data }, { new: true, runValidators: true })
}


module.exports = {
    findAllMovie,
    findOneByName,
    findOneMovieById,
    createMovie,
    deleteMovie,
    updateOneMovieById,
}
