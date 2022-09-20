const errorService = require('../services/error.service');

const handleErrorMiddleware = (err, req, res, next) => {
    errorService.handleError(err, res);
}

module.exports = handleErrorMiddleware;
