const express = require('express');
const router = express.Router()
const authService = require('../services/auth.service');

router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const response = await authService.login(username, password);
        res.json(response);
    } catch (err) {
        next(err)
    }
})

module.exports = router;
