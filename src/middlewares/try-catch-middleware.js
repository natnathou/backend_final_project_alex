const tryCatchMiddleware = (req,res,next) =>{
    try{
        next();
    } catch (err) {
        res.json(err);
    }
}

module.exports = tryCatchMiddleware;