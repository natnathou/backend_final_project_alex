const User = require('../models/user.model');

const findAllUser = () => {
    return User.find({});
}

const findOneByUsername = (username) => {
    return User.findOne({username})
}

const findOneUserById = async (id) => {
    return  User.findOne({id});
}

const createUser = (user) => {
    const userCreate = new User(user);
    return userCreate.save();
}

const deleteUser = (id) => {
    return User.findOneAndDelete({id})
}

const updateOneUserById = (id, data) => {
    return User.findOneAndUpdate({id}, { ...data }, { new: true, runValidators: true })
}


module.exports = {
    findAllUser,
    createUser,
    updateOneUserById,
    findOneUserById,
    deleteUser,
    findOneByUsername,
}
