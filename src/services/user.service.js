const userProvider =  require('../db/providers/user.provider');
const bcrypt = require("bcrypt");

const getAllUser =  () => {
    return userProvider.findAllUser();
}

const createUser = async (user) => {
    await encryptPassword(user)
    return userProvider.createUser(user);

}

const update =  async (id, data) => {
    let user = await userProvider.findOneUserById(id);
    const dataUpdated = { ...user.toObject(), ...data }
    user.set(dataUpdated);
    return await user.save();
}

const deleteUse = async (id) => {
    return  userProvider.deleteUser(id);
}

const findOneByUsername = async (username) => {
    return userProvider.findOneByUsername(username);
}

const encryptPassword = async (user)=>{
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
}

module.exports = {
    getAllUser,
    createUser,
    update,
    deleteUse,
    findOneByUsername,
}
