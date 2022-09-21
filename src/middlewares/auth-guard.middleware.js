const jsonwebtoken = require('jsonwebtoken');
const userService = require('../services/user.service');
const errorService = require('../services/error.service');

const authGuardMiddleware = async (req, res, next) => {
    try{
        // const authorization =  req.headers['authorization'];
        // const token = authorization?.replace('Bearer ', '')
        // const tokenVerify = jsonwebtoken.verify(token, process.env.SECRET_TOKEN);
        //
        // const userStored = await userService.findOneByUsername(tokenVerify.username);
        //
        // if (userStored?.toObject()?.token === token ) {
        //     next();
        // } else{
        //     throw new errorService.handleError(403, 'Forbidden')
        // }
        next();
    } catch (err) {
        res.status(403).send()
    }

}

module.exports = authGuardMiddleware;


