const userProvider =  require('../db/providers/user.provider');

const getAllUser =  () => {
    return userProvider.findAllUser();
}

const createUser = (user) => {
    return userProvider.createUser(user);

}

const update =  async (id, data) => {
    let user = await userProvider.findOneUserById(id);
    user = { ...user, ...data }
    return userProvider.updateOneUserById(id, user);
}

const deleteUse = async (id) => {
    return  userProvider.deleteUser(id);
}

module.exports = {
    getAllUser,
    createUser,
    update,
    deleteUse,
}
