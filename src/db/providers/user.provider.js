const User = require('../models/user.model');
const {use} = require("express/lib/router");

const findAllUser = () => {
    return User.find({}).lean().exec();
}

const findOneUserById = (id) => {
    return User.findById(id).lean().exec();
}

const createUser = (user) => {
    const userCreate = new User(user);
    return userCreate.save(user);
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
}
