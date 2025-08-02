const {constants} = require('../constants');
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({message: err.message, title: "Validation error"});
            break;
        case constants.UNAUTHORIZED:
            res.json({message: err.message, title: "Unauthorization Error"});
            break;
        case constants.FORBIDDEN:
            res.json({message: err.message, title: ""});
            break;
        case constants.NOT_FOUND:
            res.json({message: err.message, title: "Not Found error"});
            break;
        case constants.SERVER_ERROR:
            res.json({message: err.message, title: "Server error"});
            break;
        default:
            console.log("All Ok");
    }    
}

module.exports = errorHandler;
