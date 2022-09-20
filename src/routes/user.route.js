const express = require('express');
const router = express.Router()
const userService = require('../services/user.service');

router.get('/', async (req, res)=>{
    const response = await userService.getAllUser();
    res.json(response);
})

module.exports =  router;