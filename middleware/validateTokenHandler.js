// Using access token, only authenticated user can access all private routes
// middleware helps in validating the access token that is passed by user/client as a bearer token
// check if token is valid and belongs to a correct user

const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

// token is passed either in Header as an authorization field or in Auth section as a bearer token (we get these fields in thunder client or postman while API testing)
const validateToken = asyncHandler( async(req, res, next)=>{
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization; // handle both auth in header or as a bearer token
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]; // 0 index is the word "Bearer", token is index 1.
        // (err, decoded) -> callback function
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
            if(err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            // if correct token, the decoded contains the payload that we sent while creating the token 
            req.user= decoded.user;
            next();
        });
        if(!token) {
            res.status(401);
            throw new Error("User is not authorized or token is missing");
        }
    }
});

module.exports = validateToken;