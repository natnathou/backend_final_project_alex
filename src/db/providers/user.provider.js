const User = require('../models/user.model');

const findAllUser = () => {
    return User.find({});
}

module.exports = {
    findAllUser,
}