const express = require('express');
const router = express.Router()
const userService = require('../services/user.service');

router.get('/', async (req, res)=>{
    const response = await userService.getAllUser();
    res.json(response);
})

router.post('/new', async (req, res, next)=>{
    try{
        const body = req.body;
        const response = await userService.createUser(body);
        res.json(response);
    } catch (err) {
        res.status(500).json({ message: `${err.message}`})
    }
})

router.patch('/:id', async (req, res)=>{
    try{
        const { id } = req.params;
        const body = req.body;
        const response = await userService.update(id, body);
        res.json(response);
    } catch (err) {
        res.status(500).json({ message: `${err.message}`})
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const { id } = req.params;
        const response = await userService.deleteUse(id);
        res.json(response);
    } catch (err) {
        res.status(500).json({ message: `${err.message}`})
    }
})

module.exports =  router;
