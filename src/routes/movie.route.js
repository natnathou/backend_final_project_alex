const express = require('express');
const router = express.Router()
const movieService = require('../services/movie.service');
const authGuardMiddleware = require('../middlewares/auth-guard.middleware');
const moment = require('moment');

router.get('/', authGuardMiddleware, async (req, res) => {
    const data = await movieService.getAllMovie();
    const response = data?.map(d=>({...d?.toObject(), yearPremiered: moment(d.yearPremiered).format('MM/DD/YYYY')}));
    res.json(response);
})

router.post('/new', authGuardMiddleware, async (req, res, next) => {
    try {
        const body = req.body;
        const data = await movieService.createMovie(body);
        const response = data?.toObject();
        response.yearPremiered = moment(response.yearPremiered).format('MM/DD/YYYY')
        res.json(response);
    } catch (err) {
        next(err)
    }
})

router.patch('/:id', authGuardMiddleware, async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const data = await movieService.update(id, body);
        const response = data?.toObject();
        response.yearPremiered = moment(response.yearPremiered).format('MM/DD/YYYY')
        res.json(response);
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', authGuardMiddleware, async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = await movieService.deleteMovie(id);
        const response = data?.toObject();
        response.yearPremiered = moment(response.yearPremiered).format('MM/DD/YYYY')
        res.json(response);
    } catch (err) {
        next(err)
    }
})

module.exports = router;
