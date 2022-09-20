const bcrypt = require('bcrypt');
const userService = require('./user.service');
const errorService = require('./error.service');
const jwt = require('jsonwebtoken');

const login = async (username, password)=>{
    const userStored = await userService.findOneByUsername(username)
    const authenticate = await bcrypt.compare(password, userStored.password);
    if(!authenticate){
        throw(new errorService.ErrorHandler(403, 'Forbidden'))
    }

    const payload = {
        id: userStored._id,
        username: userStored.username,
    };
    const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
        expiresIn: parseInt(process.env.TIME_EXPIRATION),
    });

    userStored.token = token;
    await userStored.save();

    return userStored;
}



module.exports ={
    login,
}
