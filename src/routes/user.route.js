const express = require('express');
const router = express.Router()
const userService = require('../services/user.service');
const authGuardMiddleware = require('../middlewares/auth-guard.middleware');

router.get('/', authGuardMiddleware, async (req, res) => {
    const response = await userService.getAllUser();
    res.json(response);
})

router.post('/new', async (req, res, next) => {
    try {
        const body = req.body;
        const response = await userService.createUser(body);
        res.json(response);
    } catch (err) {
        next(err)
    }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const body = req.body;
        const response = await userService.update(id, body);
        res.json(response);
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const response = await userService.deleteUse(id);
        res.json(response);
    } catch (err) {
        next(err)
    }
})

module.exports = router;
