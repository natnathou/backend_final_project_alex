const userProvider =  require('../db/providers/user.provider');

const getAllUser =  () => {
    return userProvider.findAllUser();
}

module.exports = {
    getAllUser
}