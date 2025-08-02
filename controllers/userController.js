const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/userModels');

// @desc Register a user
// @route POST /api/users/register
// @access public
const registerUSer = asyncHandler (async (req,res)=>{
    const {username, email_id, password} = req.body;
    if (!username || !email_id || !password) {
        res.status(400);
        throw new Error("Input all the fields"); 
    }
    const userAvailable = await Users.findOne({email_id});
    if (userAvailable) {
        res.status(400);
        throw new Error("User with this email address is already registered");
    }
    const hashedPassword = await bcrypt.hash(password, 15); // use a random salt while hashing
    console.log("Hashed password: ", hashedPassword); 
    const user = await Users.create({username, email_id, password: hashedPassword});
    if (user) {
        console.log("User is registered: ", user);
        res.status(201).json({_id: user.id, email: user.email_id});
    } else {
        res.status(400);
        throw new Error("User registeration failed");
    }
});

// @desc Login user
// @route POST /api/users/login
// @access public
const loginUSer = asyncHandler (async (req,res)=>{
    const {email_id, password} = req.body;
    if (!email_id || !password) {
        res.status(400);
        throw new Error("Input all the fields"); 
    }
    const user = await Users.findOne({email_id});
    // compare password and hashed password
    // the arguments order in bcrypt.compare() matters
    if (user && (await bcrypt.compare(password, user.password))) {
        // provide access token in response
        const accessToken = jwt.sign({
            // payload - user object (w/o password)
            user: {
                username: user.username,
                email_id: user.email_id,
                id: user.id,
            },
        },
        // access token secret
        process.env.ACCESS_TOKEN_SECRET,
        // expiration time for the jwt tokens so that users cant login after this expiration time
        {expiresIn: "15m"}
    );
    res.status(200).json({accessToken});
    } else {
        res.status(401);
        throw new Error("The page has expired");
    }
});

// @desc information about current user
// @route GET /api/users/user
// @access private
const userInfo = asyncHandler (async (req,res)=>{
    res.json(req.user);
});

module.exports = {registerUSer, loginUSer, userInfo};