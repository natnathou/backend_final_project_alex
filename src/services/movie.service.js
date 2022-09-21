const movieProvider =  require('../db/providers/movie.provider');
const moment =  require('moment');

const getAllMovie =  () => {
    return movieProvider.findAllMovie();
}

const createMovie = async (data) => {
    data.yearPremiered = moment(data.yearPremiered).toDate();
    return movieProvider.createMovie(data);

}

const update =  async (id, data) => {
    let movie = await movieProvider.findOneMovieById(id);
    if(data.yearPremiered){
        data.yearPremiered = moment(data.yearPremiered).toDate();
    }

    const dataUpdated = { ...movie.toObject(), ...data }
    movie.set(dataUpdated);
    return await movie.save();
}

const deleteMovie = async (id) => {
    return  movieProvider.deleteMovie(id);
}

const findOneByName = async (name) => {
    return movieProvider.findOneByName(name);
}


module.exports = {
    getAllMovie,
    createMovie,
    update,
    deleteMovie,
    findOneByName,
}
